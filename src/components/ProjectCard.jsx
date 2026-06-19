import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => (
  <article className={`project-card ${project.featured ? 'project-card-featured' : ''} ${project.wide ? 'project-card-wide' : ''}`}>
    {project.imagePair ? (
      <div className="project-card-showcase" aria-label={`${project.title} mobile and desktop interface previews`}>
        <div className="project-card-showcase-desktop">
          <img
            src={project.imagePair.desktop.src}
            alt={project.imagePair.desktop.alt}
            loading="lazy"
            decoding="async"
            width={project.imagePair.desktop.width}
            height={project.imagePair.desktop.height}
          />
          <span className="project-card-showcase-label">Staff dashboard</span>
        </div>
        <div className="project-card-showcase-mobile">
          <span className="project-card-showcase-speaker" aria-hidden="true"></span>
          <img
            src={project.imagePair.mobile.src}
            alt={project.imagePair.mobile.alt}
            loading="lazy"
            decoding="async"
            width={project.imagePair.mobile.width}
            height={project.imagePair.mobile.height}
          />
          <span className="project-card-showcase-label">Guest mobile</span>
        </div>
      </div>
    ) : project.image ? (
      <div className="project-card-image-wrap">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="project-card-image"
          loading="lazy"
          decoding="async"
          width={project.imageWidth}
          height={project.imageHeight}
          style={{ objectPosition: project.imagePosition || 'center' }}
        />
      </div>
    ) : (
      <div className="project-card-visual" aria-label={`${project.title} interface preview`}>
        <div className="project-card-visual-bar">
          <span></span>
          <span></span>
          <span></span>
          <strong>{project.visual.label}</strong>
        </div>
        <div className="project-card-visual-list">
          {project.visual.items.map((item) => (
            <div className="project-card-visual-item" key={item}>
              <span className="project-card-visual-dot"></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    )}

    <div className="project-card-body">
      <div className="project-card-topline">
        <span className="project-card-status">{project.status}</span>
        <span className="project-card-availability">{project.availability}</span>
      </div>

      <div>
        <p className="project-card-subtitle">{project.subtitle}</p>
        <h3 className="project-card-title">{project.title}</h3>
      </div>

      <p className="project-card-summary">{project.summary}</p>

      <ul className="project-card-highlights" aria-label={`${project.title} highlights`}>
        {project.highlights.map((highlight) => (
          <li key={highlight}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="project-card-tech" aria-label={`${project.title} technology stack`}>
        {project.tech.map((tech) => (
          <span key={tech} className="project-card-tech-tag">{tech}</span>
        ))}
      </div>

      <div className="project-card-footer">
        <p className="project-card-privacy">{project.privacy}</p>
        {project.actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            className={`project-card-button ${action.primary ? 'project-card-button-primary' : ''}`}
          >
            {action.label}
            {action.external && <span aria-hidden="true">↗</span>}
          </a>
        ))}
      </div>
    </div>
  </article>
);

export default ProjectCard;
