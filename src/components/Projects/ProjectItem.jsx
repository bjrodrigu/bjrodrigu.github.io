import React from "react";

function ProjectItem({ project }) {
  const { title, headline, tech, description, image, imageAlt, links = {}, note } = project;

  return (
    <article className="project">
      <div className="project-media">
        {image ? (
          <img
            src={`${process.env.PUBLIC_URL}/${image}`}
            alt={imageAlt || `Screenshot of ${title}`}
            loading="lazy"
          />
        ) : (
          <div className="project-media-empty" aria-hidden="true">
            <span>{title}</span>
          </div>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        {headline && <p className="project-headline">{headline}</p>}
        <p className="project-text">{description}</p>
        <p className="project-tech">{tech}</p>
        {note && <p className="project-note">{note}</p>}

        {(links.live || links.code) && (
          <p className="project-links">
            {links.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer">
                Open the live app
              </a>
            )}
            {links.code && (
              <a href={links.code} target="_blank" rel="noopener noreferrer">
                Read the code
              </a>
            )}
          </p>
        )}
      </div>
    </article>
  );
}

export default ProjectItem;
