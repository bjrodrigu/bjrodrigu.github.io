import React from "react";
import { ArrowUpRight } from "lucide-react";
import "../../components/Projects/Projects.css";
import "./AllProjects.css";
import projects from "../../data/projects";
import ProjectItem from "../../components/Projects/ProjectItem";
import Footer from "../../components/Footer/Footer";

function AllProjects() {
    return (
        <>
            <section className="projects all-projects">
                <div className="projects-container">
                    <div className="projects-label">All Projects</div>

                    <h1 className="all-projects-title">Things I've built.</h1>

                    <div className="projects-list">
                        {projects.map((proj, i) => (
                            <ProjectItem key={proj.title} project={proj} reverse={i % 2 === 1} />
                        ))}
                    </div>

                    <a
                        href="https://github.com/bjrodrigu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link projects-all-link"
                    >
                        More on GitHub <ArrowUpRight size={13} />
                    </a>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default AllProjects;
