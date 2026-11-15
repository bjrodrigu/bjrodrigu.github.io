import React from "react";
import "./Toolbox.css";

const groups = [
  {
    name: "For web apps",
    items: "JavaScript, TypeScript, React, Next.js, Java with Spring Boot, Python with Flask, SQL and MongoDB",
  },
  {
    name: "For data",
    items: "Python with pandas, R with the tidyverse, ggplot2 and Shiny, mixed-effects models, clustering, Jupyter",
  },
  {
    name: "For shipping it",
    items: "Git, GitHub Actions and GitLab CI, Docker, Google Cloud, JUnit and Jest, Figma",
  },
];

function Toolbox() {
  return (
    <section id="toolbox" className="section">
      <div className="page">
        <h2 className="section-title">What I work with</h2>
        <dl className="toolbox">
          {groups.map((g) => (
            <div key={g.name} className="toolbox-group">
              <dt>{g.name}</dt>
              <dd>{g.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Toolbox;
