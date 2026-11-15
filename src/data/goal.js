// Argentina's second goal in the 2022 World Cup final vs France (35:12–35:21).
// Coordinates are StatsBomb's 120 × 80 pitch, taken from the pass data behind
// my World Cup passing app. Argentina attack left to right.
const goal = {
  title: "Argentina 2–0 France",
  context: "2022 World Cup final, 36th minute",
  startScore: [1, 0],
  endScore: [2, 0],
  events: [
    { t: 35 * 60 + 12, from: "Molina", to: "Mac Allister", start: [25.9, 71.8], end: [41.6, 59.2], kind: "low" },
    { t: 35 * 60 + 14, from: "Mac Allister", to: "Messi", start: [41.8, 59.0], end: [53.1, 61.8], kind: "ground" },
    { t: 35 * 60 + 15, from: "Messi", to: "Álvarez", start: [52.9, 61.8], end: [62.5, 68.2], kind: "low" },
    { t: 35 * 60 + 17, from: "Álvarez", to: "Mac Allister", start: [63.2, 68.2], end: [99.3, 54.9], kind: "ground" },
    { t: 35 * 60 + 20, from: "Mac Allister", to: "Di María", start: [99.3, 54.9], end: [111.8, 32.1], kind: "ground" },
    // The shot isn't in the pass data; it finishes inside the far post.
    { t: 35 * 60 + 21, from: "Di María", to: null, start: [111.8, 32.1], end: [120, 42.5], kind: "shot" },
  ],
};

export default goal;
