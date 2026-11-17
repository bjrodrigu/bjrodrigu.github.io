import React from "react";

function ProjectItem({ project }) {
  const { title, headline, tech, description, image, imageAlt, links = {}, note } = project;
  const base = image && `${process.env.PUBLIC_URL}/${image.replace(/\.jpg$/, "")}`;

  return (
    <article className="project">
      <div className="project-media">
        {image ? (
          // WebP at two widths (scripts/optimize_images.py), JPG as the fallback.
          <picture>
            <source
              type="image/webp"
              srcSet={`${base}-700.webp 700w, ${base}-1400.webp 1400w`}
              sizes="(min-width: 900px) 560px, calc(100vw - 32px)"
            />
            <img
              src={`${process.env.PUBLIC_URL}/${image}`}
              alt={imageAlt || `Screenshot of ${title}`}
              width="1400"
              height="875"
              loading="lazy"
              decoding="async"
            />
          </picture>
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
