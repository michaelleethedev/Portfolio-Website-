import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const renderAction = (action) => {
    const className = `project-card-button ${action.primary ? 'project-card-button-primary' : 'project-card-button-secondary'} ${action.disabled ? 'project-card-button-disabled' : ''}`;

    if (action.disabled) {
      return (
        <span key={action.label} className={className} aria-disabled="true">
          {action.label}
        </span>
      );
    }

    return (
      <a
        key={action.label}
        href={action.href}
        target={action.external ? '_blank' : undefined}
        rel={action.external ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {action.label}
      </a>
    );
  };

  return (
    <article className={`project-card ${project.featured ? 'project-card-featured' : ''}`}>
      <div className="project-card-topline">
        <span className="project-card-status">{project.status}</span>
      </div>
      <div className="project-card-content">
        <div className="project-card-visual" aria-label={`${project.title} visual preview`}>
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
        <div>
          <p className="project-card-subtitle">{project.subtitle}</p>
          <h3 className="project-card-title">{project.title}</h3>
        </div>
        <p className="project-card-summary">{project.summary}</p>
        <div className="project-card-meta">
          <p><strong>Positioning:</strong> {project.positioning}</p>
          <p><strong>Privacy:</strong> {project.privacy}</p>
        </div>

        <div className="project-card-features">
          <h4 className="project-card-section-title">Key features</h4>
          <ul className="project-card-features-list">
            {project.features.map((feature) => (
              <li key={feature} className="project-card-feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="project-card-tech">
          <h4 className="project-card-section-title">Tech stack</h4>
          {project.tech.map((tech, index) => (
            <span key={index} className="project-card-tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-card-actions">
          {project.actions.map(renderAction)}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
