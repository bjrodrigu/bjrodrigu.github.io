import React from "react";
import "./Projects.css";
import projects from "../../data/projects";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="page">
        <h2 className="section-title">Projects</h2>
        <div className="project-list">
          {projects.map((proj) => (
            <ProjectItem key={proj.title} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
