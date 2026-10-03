import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDemoModal from './ProjectDemoModal';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const [activeDemoProject, setActiveDemoProject] = useState(null);
  const [activeProjectSlug, setActiveProjectSlug] = useState(projects[0]?.slug);


  useEffect(() => {
    const projectCards = projects
      .map((project) => document.getElementById(`project-${project.slug}`))
      .filter(Boolean);

    if (!projectCards.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible?.target?.dataset?.projectSlug) {
          setActiveProjectSlug(mostVisible.target.dataset.projectSlug);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.45, 0.7]
      }
    );

    projectCards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const jumpToProject = (project) => {
    setActiveProjectSlug(project.slug);
    document.getElementById(`project-${project.slug}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <span className="projects-kicker">Selected work / 01 — 04</span>
          <h2 className="section-title">Built around real problems.</h2>
          <p className="section-subtitle">
            From resolving IT incidents to keeping a busy kitchen moving. Explore the interfaces, try the workflows, and see how I built them.
          </p>
        </div>

        <div className="projects-mobile-switcher" aria-label="Jump to featured project">
          {projects.map((project) => (
            <button
              key={project.slug}
              type="button"
              className={activeProjectSlug === project.slug ? 'projects-mobile-switcher-active' : ''}
              onClick={() => jumpToProject(project)}
              aria-pressed={activeProjectSlug === project.slug}
            >
              <span>{project.title}</span>
              <small>{project.liveDemo?.href || project.liveDemo?.modal ? 'Demo ready' : 'Case study'}</small>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onDemo={() => setActiveDemoProject(project)}
              />
            ))}
        </div>

        <p className="projects-note">
          Application demos use fictional data. Seamless is available on the Chrome Web Store.
        </p>
      </div>

      {activeDemoProject && (
        <ProjectDemoModal
          project={activeDemoProject}
          onClose={() => setActiveDemoProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
