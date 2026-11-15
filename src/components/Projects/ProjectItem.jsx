import React from "react";
import { ArrowUpRight } from "lucide-react";

function ProjectItem({ project, reverse }) {
    const { title, tech, description, image, imageAlt, links = {} } = project;

    return (
        <div className={`project-item ${reverse ? "project-reverse" : ""}`}>
            <div className="project-image-wrapper">
                {image ? (
                    <img
                        src={`${process.env.PUBLIC_URL}/${image}`}
                        alt={imageAlt || `Screenshot of ${title}`}
                        className="project-image"
                        loading="lazy"
                    />
                ) : (
                    <div className="project-image project-image--placeholder">{title}</div>
                )}
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-tech">{tech}</p>
                <p className="project-description">{description}</p>

                <div className="project-links">
                    {links.live && (
                        <a href={links.live} target="_blank" rel="noopener noreferrer" className="project-link">
                            Live site <ArrowUpRight size={13} />
                        </a>
                    )}
                    {links.code && (
                        <a href={links.code} target="_blank" rel="noopener noreferrer" className="project-link">
                            Code <ArrowUpRight size={13} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
