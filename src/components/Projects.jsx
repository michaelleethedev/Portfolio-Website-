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
          <span className="projects-kicker">Featured Projects</span>
          <h2 className="section-title">Interactive builds recruiters can open fast</h2>
          <p className="section-subtitle">
            ResolveIT, RallyTab, and SkillBridge AI lead the portfolio, with Seamless included as a live Chrome extension. Each card gives a quick path to a demo, repo, and case study.
          </p>
        </div>

        <div className="project-lab-callout">
          <div>
            <span>Recruiter flow</span>
            <strong>Scan the cards, open a live workflow, then jump into the case study for build decisions.</strong>
          </div>
          <button type="button" onClick={() => setActiveDemoProject(projects[0])}>
            Try ResolveIT demo
          </button>
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
          Public demos and repositories are linked when available. Private source stays private while it is prepared for portfolio review.
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
