import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./Projects.css";
import projects from "../../data/projects";
import ProjectItem from "./ProjectItem";

function Projects() {
    const featured = projects.filter((p) => p.featured);

    return (
        <section id="projects" className="projects">
            <div className="projects-container">

                <div className="projects-label">Selected Projects</div>

                <div className="projects-list">
                    {featured.map((proj, i) => (
                        <ProjectItem key={proj.title} project={proj} reverse={i % 2 === 1} />
                    ))}
                </div>

                <Link to="/projects" className="project-link projects-all-link">
                    All projects <ArrowUpRight size={13} />
                </Link>

            </div>
        </section>
    );
}

export default Projects;
