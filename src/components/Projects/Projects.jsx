import React from "react";
import "./Projects.css";

const projects = [
    {
        title: "Catering Execution Generator",
        tech: "Python, React, Flask, Google Cloud Vision",
        description:
            "Automated extraction and management of catering receipts, reducing report creation time by 83%. Integrated Cloud Vision API for OCR across varied receipt formats.",
        image: "TO_BE_ADDED",
    },
    {
        title: "Badger Campus Review System",
        tech: "Java, React, Spring Boot, Google Maps API",
        description:
            "Full-stack web application for students to review and rate campus study spots. Integrated Google Maps for real-time map interactions and automated Jest tests within a CI/CD pipeline.",
        image: "TO_BE_ADDED",
    },
];

function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projects-container">

                <div className="projects-label">Selected Projects</div>

                <div className="projects-list">
                    {projects.map((proj, i) => (
                        <div
                            key={proj.title}
                            className={`project-item ${i % 2 === 1 ? "project-reverse" : ""}`}
                        >
                            {/* Image */}
                            <div className="project-image-wrapper">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="project-image"
                                />
                            </div>

                            {/* Text */}
                            <div className="project-content">
                                <h3 className="project-title">{proj.title}</h3>
                                <p className="project-tech">{proj.tech}</p>
                                <p className="project-description">{proj.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;