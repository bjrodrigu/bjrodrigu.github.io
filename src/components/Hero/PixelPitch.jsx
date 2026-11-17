import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import goals from "../../data/goals";

// The canvas is drawn at StatsBomb's own scale: one pixel per unit of a 120 × 80
// pitch, plus a 2px margin so the goals fit. CSS scales it up with crisp pixels.
const M = 2;
const W = 120 + M * 2;
const H = 80 + M * 2;
const SPEED = 1.35; // replay a little faster than real time
const SHOT_TIME = 0.45; // seconds for the shot to reach the net
const MAX_STEP = 4.5; // long dribbles are cut down so the replay keeps moving

const C = {
  grassA: "#3E8E47",
  grassB: "#459A4E",
  chalk: "#EEF3EC",
  net: "#C9D4C6",
  sky: "#75AADB",
  white: "#FFFFFF",
  skin: "#C98E5F",
  ball: "#FFFFFF",
  shadow: "#2C6A34",
  shot: "#F4C430",
};

function px(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(Math.round(x) + M, Math.round(y) + M, 1, 1);
}

// Bresenham line between two pitch points; `step` > 1 draws a dotted line.
function line(ctx, x0, y0, x1, y1, color, step = 1) {
  x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
  const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
  let err = dx + dy, i = 0;
  for (;;) {
    if (i++ % step === 0) px(ctx, x0, y0, color);
    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 >= dy) { err += dy; x0 += sx; }
    if (e2 <= dx) { err += dx; y0 += sy; }
  }
}

// Midpoint circle; `keep` filters which points are drawn (for the penalty arcs).
function circle(ctx, cx, cy, r, color, keep = () => true) {
  let x = r, y = 0, err = 1 - r;
  while (x >= y) {
    [[x, y], [y, x], [-y, x], [-x, y], [-x, -y], [-y, -x], [y, -x], [x, -y]].forEach(([a, b]) => {
      if (keep(cx + a, cy + b)) px(ctx, cx + a, cy + b, color);
    });
    y++;
    if (err < 0) err += 2 * y + 1;
    else { x--; err += 2 * (y - x) + 1; }
  }
}

function drawPitch(ctx, goalFlash) {
  for (let x = -M; x < 120 + M; x++) {
    const stripe = Math.floor((x + M) / 10) % 2 === 0 ? C.grassA : C.grassB;
    for (let y = -M; y < 80 + M; y++) px(ctx, x, y, stripe);
  }
  const L = C.chalk;
  line(ctx, 0, 0, 119, 0, L); line(ctx, 0, 79, 119, 79, L);
  line(ctx, 0, 0, 0, 79, L); line(ctx, 119, 0, 119, 79, L);
  line(ctx, 60, 0, 60, 79, L);
  circle(ctx, 60, 40, 10, L);
  px(ctx, 60, 40, L);
  [[0, 18], [119, 101]].forEach(([g, edge]) => {
    line(ctx, edge, 18, edge, 62, L); line(ctx, g, 18, edge, 18, L); line(ctx, g, 62, edge, 62, L);
    const six = g === 0 ? 6 : 113;
    line(ctx, six, 30, six, 50, L); line(ctx, g, 30, six, 30, L); line(ctx, g, 50, six, 50, L);
    const spot = g === 0 ? 12 : 108;
    px(ctx, spot, 40, L);
    circle(ctx, spot, 40, 10, L, (x) => (g === 0 ? x > 18 : x < 101));
  });
  // Goals sit in the margin behind each goal line.
  [[-2, -1], [120, 121]].forEach(([a, b], i) => {
    const flash = goalFlash && i === 1;
    for (let y = 36; y <= 44; y++) {
      px(ctx, a, y, flash ? C.shot : (y % 2 ? C.net : C.white));
      px(ctx, b, y, flash ? C.shot : (y % 2 ? C.white : C.net));
    }
  });
}

// The pitch never changes during a replay, so draw it once (plain and with
// the goal flashing) and copy it each frame instead of redrawing ~10,000 pixels.
const pitchLayers = {};
function pitchLayer(goalFlash) {
  const key = goalFlash ? "flash" : "plain";
  if (!pitchLayers[key]) {
    const layer = document.createElement("canvas");
    layer.width = W;
    layer.height = H;
    drawPitch(layer.getContext("2d"), goalFlash);
    pitchLayers[key] = layer;
  }
  return pitchLayers[key];
}

function drawPlayer(ctx, kit, x, y) {
  // 3 × 4 sprite in the scoring team's kit, anchored at the feet.
  const sprite = [
    [null, C.skin, null],
    [kit.shirt, kit.stripe, kit.shirt],
    [kit.shirt, kit.stripe, kit.shirt],
    [kit.shorts, null, kit.shorts],
  ];
  sprite.forEach((row, r) => row.forEach((color, c) => {
    if (color) px(ctx, x - 1 + c, y - 3 + r, color);
  }));
}

// Solid for passes along the ground, dotted for balls in the air, sparse dots
// for a player running with the ball.
const STEP = { ground: 1, low: 1, high: 2, carry: 3 };

function drawTrail(ctx, kit, ev, progress = 1) {
  const [x0, y0] = ev.start;
  const x1 = x0 + (ev.end[0] - x0) * progress;
  const y1 = y0 + (ev.end[1] - y0) * progress;
  if (ev.kind === "shot") line(ctx, x0, y0, x1, y1, C.shot);
  else line(ctx, x0, y0, x1, y1, kit.trail, STEP[ev.kind]);
  return [x1, y1];
}

function drawBall(ctx, x, y) {
  px(ctx, x + 1, y + 1, C.shadow);
  px(ctx, x, y, C.ball);
}

// Durations come from the real timestamps between touches.
function planFor(goal) {
  const { events } = goal;
  const durations = events.map((ev, i) =>
    ev.kind === "shot"
      ? SHOT_TIME
      : Math.min(MAX_STEP, Math.max(0.6, events[i + 1].t - ev.t)) / SPEED
  );
  const starts = durations.reduce((acc, d, i) => [...acc, acc[i] + d], [0]);
  return { events, kit: goal.kit, durations, starts, total: starts[starts.length - 1] };
}

function render(ctx, plan, elapsed) {
  const { events, kit, durations, starts, total } = plan;
  const done = elapsed >= total;
  const idx = done ? events.length : starts.findIndex((s, i) => elapsed < starts[i + 1]);
  ctx.drawImage(pitchLayer(done), 0, 0);
  let ball = events[0].start;
  events.forEach((ev, i) => {
    if (i < idx) {
      drawTrail(ctx, kit, ev);
      if (ev.kind !== "carry") drawPlayer(ctx, kit, ev.start[0], ev.start[1]);
    } else if (i === idx) {
      const p = Math.min(1, (elapsed - starts[i]) / durations[i]);
      ball = drawTrail(ctx, kit, ev, p);
      if (ev.kind === "carry") {
        drawPlayer(ctx, kit, ball[0], ball[1]);
      } else {
        drawPlayer(ctx, kit, ev.start[0], ev.start[1]);
        if (ev.kind !== "shot") drawPlayer(ctx, kit, ev.end[0], ev.end[1]);
      }
    }
  });
  if (done) {
    drawPlayer(ctx, kit, ...events[events.length - 1].start);
    ball = events[events.length - 1].end;
  }
  drawBall(ctx, ball[0], ball[1]);
  return { idx: Math.min(idx, events.length - 1), done };
}

function describe(ev) {
  if (ev.kind === "shot") return `${ev.from} scores`;
  if (ev.kind === "carry") return `${ev.from} carries it`;
  return `${ev.from} to ${ev.to}`;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function clock(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function PixelPitch() {
  const canvasRef = useRef(null);
  const frame = useRef(0);
  // A different goal each visit; the picker lets people choose the rest.
  const [goalIdx, setGoalIdx] = useState(() => Math.floor(Math.random() * goals.length));
  const [state, setState] = useState({ idx: 0, done: false });
  const [runId, setRunId] = useState(0);
  const goal = goals[goalIdx];
  const plan = useMemo(() => planFor(goal), [goal]);
  const { events } = plan;

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    if (prefersReducedMotion()) {
      setState(render(ctx, plan, plan.total));
      return undefined;
    }
    let startTime = null;
    let last = -1;
    const tick = (now) => {
      if (startTime === null) startTime = now;
      const elapsed = (now - startTime) / 1000;
      const next = render(ctx, plan, elapsed);
      const key = next.idx * 2 + (next.done ? 1 : 0);
      if (key !== last) { last = key; setState(next); }
      if (!next.done) frame.current = requestAnimationFrame(tick);
    };

    // Show the first frame right away, but only start the move once the
    // pitch is actually on screen (someone may land on /#projects first).
    setState(render(ctx, plan, 0));
    const start = () => { frame.current = requestAnimationFrame(tick); };
    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          start();
        }
      }, { threshold: 0.5 });
      observer.observe(canvasRef.current);
    } else {
      start();
    }
    return () => {
      if (observer) observer.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, [plan, runId]);

  const replay = useCallback(() => setRunId((n) => n + 1), []);
  const score = state.done ? goal.endScore : goal.startScore;
  const now = state.done ? events[events.length - 1].t : events[state.idx].t;
  const label =
    `Pixel-art soccer pitch replaying ${goal.title}, ${goal.context}: ` +
    events.map(describe).join(", ") + ".";

  return (
    <figure className="pitch">
      <div className="pitch-picker" role="group" aria-label="Choose a goal to replay">
        {goals.map((g, i) => (
          <button
            key={g.id}
            type="button"
            className="pitch-pick"
            aria-pressed={i === goalIdx}
            onClick={() => (i === goalIdx ? replay() : setGoalIdx(i))}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="pitch-board" aria-hidden="true">
        <span>{goal.teams[0]}</span>
        <span className={state.done ? "pitch-score is-goal" : "pitch-score"}>{score[0]}-{score[1]}</span>
        <span>{goal.teams[1]}</span>
        <span className="pitch-clock">{clock(now)}</span>
      </div>

      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        className="pitch-canvas"
        role="img"
        aria-label={label}
      />

      <figcaption className="pitch-caption">
        <ol className={state.done ? "pitch-log is-done" : "pitch-log"}>
          {events.map((ev, i) => (
            <li key={i} className={!state.done && i === state.idx ? "is-current" : undefined}>
              <span className="pitch-log-time">{clock(ev.t)}</span> {describe(ev)}
            </li>
          ))}
        </ol>
        <p className="pitch-note">
          {goal.title}, {goal.context}. Every touch is real StatsBomb event data, drawn one
          pixel per yard. My{" "}
          <a href="https://bjrodriguez.shinyapps.io/world_cup22_passes/" target="_blank" rel="noopener noreferrer">
            World Cup passing app
          </a>{" "}
          digs into the passes behind moves like this.{" "}
          <button type="button" className="pitch-replay" onClick={replay}>
            Replay the goal
          </button>
        </p>
      </figcaption>
    </figure>
  );
}

export default PixelPitch;
