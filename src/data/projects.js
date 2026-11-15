// Single source of truth for the home page ("featured") and the All Projects page.
// `image` is a path under public/ (images/...); leave it out to show a text tile instead.
const projects = [
    {
        title: "Clutter Clear Website",
        tech: "Next.js, TypeScript, PHP",
        description:
            "Website redesign for a junk-removal business in Kenosha, WI. Built as a static Next.js export with an automated image-optimization step, plus a PHP quote form with honeypot, timing and rate-limit spam protection.",
        image: "images/clutter-clear.jpg",
        links: {},
        featured: true,
    },
    {
        title: "Badger Campus Review System",
        tech: "Java, React, Spring Boot, MySQL, Google Maps API",
        description:
            "Full-stack web application for students to review and rate campus study spots, built in a seven-person Scrum team. I built the map integration, the review flow and its REST endpoints, and the Jest unit tests in the CI/CD pipeline.",
        image: "images/campus-review.jpg",
        imageAlt: "Figma mockup of the campus map and location detail view",
        links: { code: "https://github.com/bjrodrigu/Project_08" },
        featured: true,
    },
    {
        title: "Catering Execution Generator",
        tech: "Python, React, Flask, Google Cloud Vision",
        description:
            "Turns a stack of catering receipts into a ready-to-print Excel prep sheet, cutting report creation time by 83%. Uses PDF text extraction with a Google Cloud Vision OCR fallback across varied receipt formats.",
        image: "images/catering.jpg",
        imageAlt: "Execution sheet generated from a sample receipt",
        links: { code: "https://github.com/bjrodrigu/catering-execution-generator" },
        featured: true,
    },
    {
        title: "World Cup '22 Passing Visualization",
        tech: "R, Shiny, ggplot2, k-means",
        description:
            "Interactive Shiny app for exploring every pass from all 64 matches of the 2022 World Cup. Passes are grouped with k-means clustering by location, length and direction and drawn on an accurate pitch, with filters to compare players side by side.",
        image: "images/world-cup.jpg",
        links: {
            live: "https://bjrodriguez.shinyapps.io/world_cup22_passes/",
            code: "https://github.com/bjrodrigu/world-cup-22-passing-viz",
        },
        featured: false,
    },
    {
        title: "Sports Analytics",
        tech: "R, lme4, Bradley–Terry, StatsBomb, NFL tracking data",
        description:
            "Three team projects: Bayer Leverkusen's shot quality and corner-kick setups from StatsBomb data, upset probabilities in college football rivalries with a Bradley–Terry model, and a multilevel model of how NFL receivers win space at the catch point using Big Data Bowl tracking data.",
        image: "images/sports-analytics.jpg",
        imageAlt: "Predicted win probabilities for five college football rivalries",
        links: { code: "https://github.com/bjrodrigu/sports-analytics" },
        featured: false,
    },
    {
        title: "Fitness Tracker",
        tech: "Python, Java, Spring Boot, MongoDB Atlas",
        description:
            "Prototype that pulls my runs from Garmin Connect, normalizes distance, duration and pace, and serves them through a Spring Boot REST API backed by MongoDB Atlas with full-text search.",
        links: { code: "https://github.com/bjrodrigu/fitness-tracker" },
        featured: false,
    },
];

export default projects;
