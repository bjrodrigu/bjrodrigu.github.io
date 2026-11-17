// Projects in the order they appear. `image` is a path under public/; leave it
// out to show a pixel-pitch tile instead.
const projects = [
    {
        title: "World Cup '22 passing explorer",
        tech: "R, Shiny, ggplot2, k-means clustering",
        headline: "Every pass from the 2022 World Cup, on one pitch.",
        description:
            "An R Shiny app that groups passes by where they start, how far they go and which direction, then draws them so you can compare players side by side.",
        image: "images/world-cup.jpg",
        imageAlt: "The World Cup passing app comparing Enzo Fernández and Lionel Messi: every pass from the tournament drawn as arrows on two pitches, colored by cluster, under totals for passes, completion and progressive passes",
        links: {
            live: "https://bjrodriguez.shinyapps.io/world_cup22_passes/",
            code: "https://github.com/bjrodrigu/world-cup-22-passing-viz",
        },
    },
    {
        title: "StudyBadger",
        tech: "React, Java, Spring Boot, MySQL, Google Maps",
        headline: "A campus map of study spots, built by a team of seven.",
        description:
            "Students rate and review places to study at UW–Madison. We worked in two-week sprints; I built the map, the review flow and the API endpoints behind it, and the frontend tests that run in CI.",
        image: "images/campus-review.jpg",
        imageAlt: "StudyBadger's campus map, where each building's pin shows its average rating, next to a list of study spots with ratings, distances and tags; College Library is highlighted in both",
        links: { code: "https://github.com/bjrodrigu/Project_08" },
    },
    {
        title: "Catering execution generator",
        tech: "Python, Flask, Google Cloud Vision, React",
        headline: "83% less time on prep reports.",
        description:
            "A sandwich shop's staff tallied every catering order by hand. I built a tool that reads the order receipts (PDF text first, OCR when that fails) and prints the prep sheet, slicing totals included.",
        image: "images/catering.jpg",
        imageAlt: "A real catering receipt for two 30-piece party boxes, with customer and store details blacked out, next to the Excel prep sheet the tool generated from it: 20 sandwiches, counts per sandwich, and how much cheese, ham, turkey, beef and Vito meat to slice",
        links: { code: "https://github.com/bjrodrigu/catering-execution-generator" },
    },
    {
        title: "Clutter Clear website",
        tech: "Next.js, TypeScript, PHP",
        headline: "A new site that runs on the owner's existing hosting.",
        description:
            "A static Next.js export for a junk-removal company in Kenosha, with photos resized at build time and a quote form that emails the owner and filters out spam.",
        image: "images/clutter-clear.jpg",
        imageAlt: "Home page of the Clutter Clear website with the company van",
        note: "Launching soon.",
        links: { code: "https://github.com/bjrodrigu/clutter-clear" },
    },
    {
        title: "Sports analytics coursework",
        tech: "R, lme4, Bradley–Terry models, tracking data",
        headline: "Corners, rivalries and space at the catch point.",
        description:
            "Three team projects: how Bayer Leverkusen's title side created chances from corners, how likely upsets are in college football's biggest rivalries, and which movements help NFL receivers get open, using Big Data Bowl tracking data.",
        image: "images/sports-analytics.jpg",
        imageAlt: "Three charts, one per project: a heatmap of where players stood when Bayer Leverkusen took shots, predicted win probabilities for five college football rivalries, and average receiver separation by NFL route",
        links: { code: "https://github.com/bjrodrigu/sports-analytics" },
    },
    {
        title: "Training Journal",
        tech: "React, TypeScript, Java, Spring Boot, MongoDB, Python, Docker",
        headline: "A training log for running, lifting and food.",
        description:
            "Each run or lift is a journal entry with notes. The dashboard shows weekly mileage, pace trends, best efforts and strength progression. Runs sync from Garmin Connect on a schedule. Food logging tracks daily macros, with food search, barcode scanning and a calorie target set from your weight goal. It installs on a phone like an app, and anyone can try it with sample data and one docker compose up.",
        image: "images/training-journal.jpg",
        imageAlt: "Training dashboard with eight weeks of daily miles in a grid, strength days marked in green, a half marathon in the first week of October, and the start of the weekly mileage and average pace charts",
        links: { code: "https://github.com/bjrodrigu/fitness-tracker" },
    },
];

export default projects;
