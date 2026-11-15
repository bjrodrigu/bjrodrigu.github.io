// Projects in the order they appear. `image` is a path under public/; leave it
// out to show a pixel-pitch tile instead.
const projects = [
    {
        title: "World Cup '22 passing explorer",
        tech: "R, Shiny, ggplot2, k-means clustering",
        description:
            "An interactive app for every pass from all 64 matches of the 2022 World Cup. Passes are clustered by where they start, how far they go and in which direction, then drawn on a proper pitch so you can compare players side by side. The goal replay at the top of this page uses the same data.",
        image: "images/world-cup.jpg",
        imageAlt: "Lionel Messi's World Cup passes drawn as arrows on a pitch, colored by cluster",
        links: {
            live: "https://bjrodriguez.shinyapps.io/world_cup22_passes/",
            code: "https://github.com/bjrodrigu/world-cup-22-passing-viz",
        },
    },
    {
        title: "Catering execution generator",
        tech: "Python, Flask, Google Cloud Vision, React",
        description:
            "A sandwich shop's staff used to tally catering orders by hand before every big day. This tool reads the order receipts (PDF text first, OCR when that fails), counts every sandwich, wrap and side, and prints the prep sheet with slicing totals. Report time went down by about 83%.",
        image: "images/catering.jpg",
        imageAlt: "Prep sheet generated from a sample receipt, listing quantities to prepare",
        note: "Built with a co-worker, Jack Miller.",
        links: { code: "https://github.com/bjrodrigu/catering-execution-generator" },
    },
    {
        title: "Badger campus review system",
        tech: "React, Java, Spring Boot, MySQL, Google Maps",
        description:
            "A map of UW–Madison study spots that students can rate and review. Seven of us built it in two-week sprints. My parts were the map, the whole review flow and the API endpoints behind it, and the frontend unit tests that run in CI.",
        image: "images/campus-review.jpg",
        imageAlt: "Design mockup of the campus map with a list of study spots",
        links: { code: "https://github.com/bjrodrigu/Project_08" },
    },
    {
        title: "Clutter Clear website",
        tech: "Next.js, TypeScript, PHP",
        description:
            "A new website for a junk-removal company in Kenosha. It's a static Next.js export so it can sit on the owner's existing shared hosting, with resized photos generated at build time and a quote form that emails the owner and filters out spam.",
        image: "images/clutter-clear.jpg",
        imageAlt: "Home page of the Clutter Clear website with the company van",
        note: "Launching soon.",
    },
    {
        title: "Sports analytics coursework",
        tech: "R, lme4, Bradley–Terry models, tracking data",
        description:
            "Three team projects: how Bayer Leverkusen's title side created chances from corners, how likely upsets are in college football's biggest rivalries, and which movements help NFL receivers find space at the catch point, using Big Data Bowl tracking data.",
        image: "images/sports-analytics.jpg",
        imageAlt: "Bar chart of predicted win probabilities for five college football rivalries",
        links: { code: "https://github.com/bjrodrigu/sports-analytics" },
    },
    {
        title: "Run tracker",
        tech: "Python, Java, Spring Boot, MongoDB Atlas",
        description:
            "Pulls my runs from Garmin Connect, cleans up distance, time and pace, and serves them from a small Spring Boot API with full-text search. It's an early prototype that I'd like to turn into a training log.",
        links: { code: "https://github.com/bjrodrigu/fitness-tracker" },
    },
];

export default projects;
