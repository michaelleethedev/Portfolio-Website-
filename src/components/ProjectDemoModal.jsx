import React, { useEffect, useMemo, useState } from 'react';
import { projectDemoCopy } from '../data/projects';
import './ProjectDemoModal.css';

const ProjectDemoModal = ({ project, onClose }) => {
  const copy = projectDemoCopy[project?.title];
  const [activeTab, setActiveTab] = useState(copy?.tabs[0] || '');
  const [activeAction, setActiveAction] = useState(copy?.actions[0] || '');

  useEffect(() => {
    if (!copy) return;
    setActiveTab(copy.tabs[0]);
    setActiveAction(copy.actions[0]);
  }, [copy, project?.title]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const previewImage = useMemo(() => {
    if (project?.imagePair) {
      return project.imagePair.mobileTabs?.includes(activeTab) ? project.imagePair.mobile : project.imagePair.desktop;
    }

    return {
      src: project?.image,
      alt: project?.imageAlt,
      width: project?.imageWidth,
      height: project?.imageHeight
    };
  }, [activeTab, project]);

  if (!project || !copy) return null;

  return (
    <div className="project-demo-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="project-demo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-demo-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="project-demo-header">
          <div>
            <span className="project-demo-eyebrow">{copy.eyebrow}</span>
            <h3 id="project-demo-title">{project.title}</h3>
            <p>{copy.intro}</p>
          </div>
          <button className="project-demo-close" type="button" onClick={onClose} aria-label="Close project demo">
            ×
          </button>
        </div>

        <div className="project-demo-layout">
          <div className="project-demo-preview">
            <div className="project-demo-toolbar">
              <div className="project-demo-window-dots" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>{activeTab}</span>
            </div>

            <div className={`project-demo-screen ${previewImage === project.imagePair?.mobile ? 'project-demo-screen-mobile' : ''}`}>
              {previewImage.src ? (
                <img
                  src={previewImage.src}
                  alt={previewImage.alt}
                  width={previewImage.width}
                  height={previewImage.height}
                />
              ) : (
                <div className="project-demo-mockup" aria-label={`${project.title} ${activeTab} preview`}>
                  <div className="project-demo-mockup-header">
                    <strong>{activeTab}</strong>
                    <span>{project.status}</span>
                  </div>
                  <div className="project-demo-mockup-grid">
                    {project.visual.items.map((item) => (
                      <div key={item}>
                        <span></span>
                        <strong>{item}</strong>
                        <p>{copy.notes[activeTab]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="project-demo-hotspot project-demo-hotspot-one">
                <span></span>
                {activeAction}
              </div>
              <div className="project-demo-hotspot project-demo-hotspot-two">
                <span></span>
                {copy.notes[activeTab]}
              </div>
            </div>
          </div>

          <aside className="project-demo-panel" aria-label={`${project.title} interactive controls`}>
            <div className="project-demo-tabs" role="tablist" aria-label="Demo screens">
              {copy.tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={tab === activeTab ? 'project-demo-tab project-demo-tab-active' : 'project-demo-tab'}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  aria-selected={tab === activeTab}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="project-demo-stats">
              {copy.stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="project-demo-actions">
              {copy.actions.map((action) => (
                <button
                  key={action}
                  type="button"
                  className={action === activeAction ? 'project-demo-action project-demo-action-active' : 'project-demo-action'}
                  onClick={() => setActiveAction(action)}
                >
                  <span></span>
                  {action}
                </button>
              ))}
            </div>

            <div className="project-demo-note">
              <span>Current screen</span>
              <p>{copy.notes[activeTab]}</p>
            </div>

            {project.liveDemo?.routes ? (
              <div className="project-demo-real-links">
                <span>Open real app</span>
                {project.liveDemo.routes.map((route) => (
                  <a key={route.label} href={route.href} target="_blank" rel="noopener noreferrer">
                    {route.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            ) : project.liveDemo?.missingUrlMessage ? (
              <div className="project-demo-real-links project-demo-real-links-muted">
                <span>Real app connection</span>
                <p>{project.liveDemo.missingUrlMessage}</p>
              </div>
            ) : null}
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ProjectDemoModal;
