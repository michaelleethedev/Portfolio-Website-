import React from 'react';
import './ProjectDetail.css';

const ProjectPreview = ({ project }) => {
  if (project.imagePair) {
    return (
      <div className="project-detail-preview project-detail-preview-pair">
        <img src={project.imagePair.desktop.src} alt={project.imagePair.desktop.alt} />
        <img src={project.imagePair.mobile.src} alt={project.imagePair.mobile.alt} />
      </div>
    );
  }

  if (project.image) {
    return (
      <div className="project-detail-preview">
        <img src={project.image} alt={project.imageAlt} />
      </div>
    );
  }

  return (
    <div className="project-detail-preview project-detail-preview-mock">
      <div className="project-detail-preview-bar">
        <span></span>
        <span></span>
        <span></span>
        <strong>{project.visual.label}</strong>
      </div>
      <div className="project-detail-preview-grid">
        {project.visual.items.map((item) => (
          <div key={item}>
            <span></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectDetail = ({ project, onBack, onOpenDemo }) => {
  const goToContact = () => {
    window.location.hash = '#contact';
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const liveButton = project.liveDemo?.href ? (
    <a
      href={project.liveDemo.href}
      target={project.liveDemo.external ? '_blank' : undefined}
      rel={project.liveDemo.external ? 'noopener noreferrer' : undefined}
      className="project-detail-button project-detail-button-primary"
    >
      {project.liveDemo.label}
      {project.liveDemo.external && <span aria-hidden="true">↗</span>}
    </a>
  ) : (
    <button type="button" className="project-detail-button project-detail-button-primary" onClick={onOpenDemo}>
      {project.liveDemo?.label || 'Live Demo'}
    </button>
  );

  return (
    <main className="project-detail-page">
      <section className="project-detail-hero">
        <div className="container project-detail-hero-grid">
          <div className="project-detail-copy">
            <button type="button" className="project-detail-back" onClick={onBack}>
              ← Back to portfolio
            </button>
            <div className="project-detail-kicker">
              <span>{project.status}</span>
              <span>{project.availability}</span>
            </div>
            <h1>{project.shortTitle}</h1>
            <p>{project.description}</p>
            <div className="project-detail-actions">
              {liveButton}
              {project.github?.href && <a
                href={project.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-button project-detail-button-secondary"
              >
                GitHub
                <span aria-hidden="true">↗</span>
              </a>}
              {project.store && <a href={project.store.href} target="_blank" rel="noopener noreferrer" className="project-detail-button project-detail-button-secondary">Chrome Store ↗</a>}
              <button type="button" className="project-detail-button project-detail-button-ghost" onClick={goToContact}>
                Contact
              </button>
            </div>
            {project.liveDemo?.routes && <div className="project-detail-actions" aria-label={`${project.title} demo workflows`}>
              {project.liveDemo.routes.slice(1).map(route => <a key={route.label} href={route.href} target="_blank" rel="noopener noreferrer" className="project-detail-button project-detail-button-ghost">{route.label} ↗</a>)}
            </div>}
          </div>
          <ProjectPreview project={project} />
        </div>
      </section>

      <section className="project-detail-section">
        <div className="container project-detail-content-grid">
          <article>
            <span className="project-detail-label">What it does</span>
            <h2>Built around a real user workflow</h2>
            <p>{project.summary}</p>
            <p>{project.why}</p>
          </article>

          <aside className="project-detail-stack">
            <span className="project-detail-label">Tech stack</span>
            <div>
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="project-detail-section project-detail-section-alt">
        <div className="container">
          <div className="project-detail-section-heading">
            <span className="project-detail-label">Key features</span>
            <h2>Inside the workflow</h2>
          </div>
          <div className="project-detail-feature-grid">
            {project.features.map((feature) => (
              <div key={feature}>
                <span></span>
                <strong>{feature}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-detail-section">
        <div className="container project-detail-content-grid">
          <article>
            <span className="project-detail-label">Preview</span>
            <h2>Screenshots and interaction model</h2>
            <p>
              {project.privacy} Open the demo to try the workflow and see how the interface responds.
            </p>
          </article>
          <ProjectPreview project={project} />
        </div>
      </section>

      <section className="project-detail-section project-detail-section-alt">
        <div className="container project-detail-content-grid">
          <article>
            <span className="project-detail-label">Next improvements</span>
            <h2>What I would improve next</h2>
            <ul className="project-detail-next-list">
              {project.next.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <aside className="project-detail-recruiter-note">
            <span className="project-detail-label">Recruiter note</span>
            <p>
              This project is included to show how I think through product flows, responsive UI, accessible actions, and practical implementation tradeoffs.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
