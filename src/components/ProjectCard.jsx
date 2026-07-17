import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onDemo }) => {
  const caseStudyHref = `#/projects/${project.slug}`;

  const openCaseStudy = () => {
    window.location.hash = `/projects/${project.slug}`;
  };

  const handleCardKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCaseStudy();
    }
  };

  const stopCardClick = (event) => {
    event.stopPropagation();
  };

  return (
    <article
      id={`project-${project.slug}`}
      data-project-slug={project.slug}
      className={`project-card ${project.featured ? 'project-card-featured' : ''} ${project.wide ? 'project-card-wide' : ''}`}
      onClick={openCaseStudy}
      onKeyDown={handleCardKeyDown}
      role="link"
      tabIndex="0"
      aria-label={`Open ${project.title} case study`}
    >
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
          <span className="project-card-showcase-label">{project.imagePair.desktop.label || 'Desktop preview'}</span>
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
          <span className="project-card-showcase-label">{project.imagePair.mobile.label || 'Mobile preview'}</span>
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

        <div className="project-card-outcome">
          <span>Outcome</span>
          <p>{project.why || project.summary}</p>
        </div>

        <div className="project-card-badges" aria-label={`${project.title} badges`}>
          {project.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>

        <div className="project-card-section-label">Workflow highlights</div>
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

        <div className="project-card-section-label">Built with</div>
        <div className="project-card-tech" aria-label={`${project.title} technology stack`}>
          {project.tech.map((tech) => (
            <span key={tech} className="project-card-tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-card-footer">
          <p className="project-card-privacy">{project.privacy}</p>
          {project.liveDemo?.href ? (
            <a
              href={project.liveDemo.href}
              target={project.liveDemo.external ? '_blank' : undefined}
              rel={project.liveDemo.external ? 'noopener noreferrer' : undefined}
              className="project-card-button project-card-button-live"
              onClick={stopCardClick}
            >
              {project.liveDemo.label}
              {project.liveDemo.external && <span aria-hidden="true">↗</span>}
            </a>
          ) : project.liveDemo?.modal ? (
            <button
              type="button"
              className="project-card-button project-card-button-live"
              onClick={(event) => {
                stopCardClick(event);
                onDemo();
              }}
            >
              {project.liveDemo.label}
            </button>
          ) : null}
          {project.github?.href ? (
            <a
              href={project.github.href}
              target={project.github.external ? '_blank' : undefined}
              rel={project.github.external ? 'noopener noreferrer' : undefined}
              className="project-card-button project-card-button-source"
              onClick={stopCardClick}
            >
              {project.github.label}
              {project.github.external && <span aria-hidden="true">↗</span>}
            </a>
          ) : (
            <span className="project-card-button project-card-button-disabled" aria-disabled="true">
              GitHub soon
            </span>
          )}
          <a
            href={caseStudyHref}
            className="project-card-button project-card-button-primary"
            onClick={stopCardClick}
          >
            Case Study
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
