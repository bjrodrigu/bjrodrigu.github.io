// Six goals from the 2022 World Cup knockout rounds, taken from StatsBomb's open
// event data. Coordinates are StatsBomb's 120 × 80 pitch, always from the
// scoring team's point of view, so every move attacks left to right.
// kind: "ground" | "low" | "high" pass, "carry" (running with the ball), "shot".

const t = (m, s) => m * 60 + s;

const KITS = {
  ARG: { shirt: "#75AADB", stripe: "#FFFFFF", shorts: "#1B2A44", trail: "#75AADB" },
  FRA: { shirt: "#22356E", stripe: "#22356E", shorts: "#FFFFFF", trail: "#C7D3F5" },
  BRA: { shirt: "#FFDF00", stripe: "#FFDF00", shorts: "#1F4FB4", trail: "#7FB0FF" },
};

const goals = [
  {
    id: "di-maria-final",
    label: "Di María",
    title: "Argentina 2–0 France",
    context: "2022 World Cup final, 36th minute",
    teams: ["ARG", "FRA"],
    startScore: [1, 0],
    endScore: [2, 0],
    kit: KITS.ARG,
    events: [
      { t: t(35, 12), from: "Molina", to: "Mac Allister", start: [25.9, 71.8], end: [41.6, 59.2], kind: "low" },
      { t: t(35, 14), from: "Mac Allister", to: "Messi", start: [41.8, 59.0], end: [53.1, 61.8], kind: "ground" },
      { t: t(35, 15), from: "Messi", to: "Álvarez", start: [52.9, 61.8], end: [62.5, 68.2], kind: "low" },
      { t: t(35, 17), from: "Álvarez", to: "Mac Allister", start: [63.2, 68.2], end: [99.3, 54.9], kind: "ground" },
      { t: t(35, 20), from: "Mac Allister", to: "Di María", start: [99.3, 54.9], end: [111.8, 32.1], kind: "ground" },
      { t: t(35, 22), from: "Di María", start: [111.8, 32.1], end: [120, 41.7], kind: "shot" },
    ],
  },
  {
    id: "molina-netherlands",
    label: "Molina",
    title: "Netherlands 0–1 Argentina",
    context: "2022 World Cup quarter-final, 35th minute",
    teams: ["NED", "ARG"],
    startScore: [0, 0],
    endScore: [0, 1],
    kit: KITS.ARG,
    events: [
      { t: t(33, 49), from: "Otamendi", to: "Molina", start: [47.2, 50.3], end: [57.8, 69.2], kind: "ground" },
      { t: t(33, 50), from: "Molina", start: [57.8, 69.2], end: [81.5, 69.2], kind: "carry" },
      { t: t(33, 57), from: "Molina", to: "Messi", start: [81.5, 69.2], end: [74.2, 71.1], kind: "ground" },
      { t: t(33, 57), from: "Messi", start: [74.2, 71.1], end: [85.6, 44.9], kind: "carry" },
      { t: t(34, 2), from: "Messi", to: "Molina", start: [85.6, 44.9], end: [103.4, 50.6], kind: "ground" },
      { t: t(34, 2), from: "Molina", start: [103.4, 50.6], end: [109.1, 42.4], kind: "carry" },
      { t: t(34, 4), from: "Molina", start: [109.1, 42.4], end: [120, 36.5], kind: "shot" },
    ],
  },
  {
    id: "alvarez-croatia",
    label: "Álvarez",
    title: "Argentina 3–0 Croatia",
    context: "2022 World Cup semi-final, 69th minute",
    teams: ["ARG", "CRO"],
    startScore: [2, 0],
    endScore: [3, 0],
    kit: KITS.ARG,
    events: [
      { t: t(68, 32), from: "Molina", to: "Álvarez", start: [42.5, 79], end: [63.6, 76.2], kind: "high" },
      { t: t(68, 34), from: "Álvarez", to: "Messi", start: [64.1, 76.4], end: [65.3, 79], kind: "low" },
      { t: t(68, 35), from: "Messi", start: [65.3, 79], end: [116.9, 53.1], kind: "carry" },
      { t: t(68, 46), from: "Messi", to: "Álvarez", start: [116.9, 53.1], end: [113.3, 45.4], kind: "ground" },
      { t: t(68, 46), from: "Álvarez", start: [113.3, 45.4], end: [120, 40.3], kind: "shot" },
    ],
  },
  {
    id: "mbappe-final",
    label: "Mbappé",
    title: "Argentina 2–2 France",
    context: "2022 World Cup final, 81st minute",
    teams: ["ARG", "FRA"],
    startScore: [2, 1],
    endScore: [2, 2],
    kit: KITS.FRA,
    events: [
      { t: t(80, 47), from: "Coman", start: [69.2, 68.0], end: [84.8, 71.2], kind: "carry" },
      { t: t(80, 52), from: "Coman", to: "Rabiot", start: [84.8, 71.2], end: [78.8, 58.3], kind: "ground" },
      { t: t(80, 54), from: "Rabiot", to: "Mbappé", start: [79.2, 54.1], end: [93.1, 24.1], kind: "high" },
      { t: t(80, 56), from: "Mbappé", to: "Thuram", start: [93.1, 24.1], end: [94.8, 36.3], kind: "low" },
      { t: t(80, 57), from: "Thuram", to: "Mbappé", start: [94.8, 36.3], end: [104.8, 30.1], kind: "high" },
      { t: t(80, 59), from: "Mbappé", start: [104.8, 30.1], end: [120, 41.5], kind: "shot" },
    ],
  },
  {
    id: "neymar-croatia",
    label: "Neymar",
    title: "Croatia 0–1 Brazil",
    context: "2022 World Cup quarter-final, 106th minute",
    teams: ["CRO", "BRA"],
    startScore: [0, 0],
    endScore: [0, 1],
    kit: KITS.BRA,
    events: [
      { t: t(105, 26), from: "Marquinhos", to: "Neymar", start: [76.2, 42.5], end: [81.5, 41.8], kind: "ground" },
      { t: t(105, 28), from: "Neymar", to: "Rodrygo", start: [81.5, 41.8], end: [91.6, 35.3], kind: "ground" },
      { t: t(105, 30), from: "Rodrygo", to: "Neymar", start: [91.6, 35.3], end: [88.9, 44.9], kind: "ground" },
      { t: t(105, 30), from: "Neymar", start: [88.9, 44.9], end: [94.0, 45.4], kind: "carry" },
      { t: t(105, 31), from: "Neymar", to: "Paquetá", start: [94.0, 45.4], end: [100.7, 38.9], kind: "ground" },
      { t: t(105, 32), from: "Paquetá", to: "Neymar", start: [100.7, 38.9], end: [107.9, 43.7], kind: "ground" },
      { t: t(105, 33), from: "Neymar", start: [107.9, 43.7], end: [116.5, 47.2], kind: "carry" },
      { t: t(105, 35), from: "Neymar", start: [116.5, 47.2], end: [120, 41.4], kind: "shot" },
    ],
  },
  {
    id: "tchouameni-england",
    label: "Tchouaméni",
    title: "England 0–1 France",
    context: "2022 World Cup quarter-final, 17th minute",
    teams: ["ENG", "FRA"],
    startScore: [0, 0],
    endScore: [0, 1],
    kit: KITS.FRA,
    events: [
      { t: t(16, 12), from: "Mbappé", start: [87.5, 34.7], end: [93.0, 49.1], kind: "carry" },
      { t: t(16, 14), from: "Mbappé", to: "Dembélé", start: [93.0, 49.1], end: [101.3, 70.4], kind: "ground" },
      { t: t(16, 16), from: "Dembélé", start: [101.3, 70.4], end: [104.5, 59.9], kind: "carry" },
      { t: t(16, 19), from: "Dembélé", to: "Griezmann", start: [104.5, 59.9], end: [97.2, 55.3], kind: "ground" },
      { t: t(16, 21), from: "Griezmann", to: "Tchouaméni", start: [98.8, 55.7], end: [93.0, 50.4], kind: "ground" },
      { t: t(16, 22), from: "Tchouaméni", start: [93.0, 50.4], end: [92.5, 43.5], kind: "carry" },
      { t: t(16, 22), from: "Tchouaméni", start: [92.5, 43.5], end: [120, 36.5], kind: "shot" },
    ],
  },
];

export default goals;
