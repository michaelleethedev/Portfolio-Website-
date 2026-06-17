import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const chromeWebStoreUrl = 'https://chromewebstore.google.com/detail/seamless/phipkfflgldgfdmgenobpklmlnpekgph?hl=en';
  const githubUrl = 'https://github.com/michaelleethedev';

  const projects = [
    {
      title: 'TraceForge AI',
      subtitle: 'AI observability / agent monitoring dashboard',
      status: 'Featured Project',
      summary: 'A portfolio demo dashboard concept for monitoring AI agent activity, tool calls, latency, risk signals, traces, and policy events.',
      positioning: 'Enterprise AI safety and observability platform',
      privacy: 'Uses mock data only. No real AI logs, API keys, or private user data.',
      features: [
        'Agent activity timeline with trace-level context',
        'Tool call, latency, and policy event monitoring',
        'Risk signal review for AI workflow oversight',
        'Product-style dashboard UI built with mock data'
      ],
      tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Mock Data'],
      visual: {
        label: 'Trace Monitor',
        items: ['Agent Run', 'Tool Call', 'Policy Event', 'Risk Review']
      },
      actions: [
        { label: 'Live Demo', disabled: true, primary: true },
        { label: 'GitHub', href: githubUrl, external: true },
        { label: 'Case Study', disabled: true }
      ],
      featured: true
    },
    {
      title: 'Seamless',
      subtitle: 'Chrome extension',
      status: 'Published Chrome Extension',
      summary: 'A Chrome extension for organizing, searching, favoriting, and reusing workflow templates directly in the browser.',
      positioning: 'Browser productivity and workflow automation tool',
      privacy: 'Stores templates locally. No real user data is collected in the demo.',
      features: [
        'Template organization with folders, search, and favorites',
        'Reusable workflow snippets available directly in the browser',
        'Fast local-template access for repeated writing tasks',
        'Privacy-first local storage model'
      ],
      tech: ['TypeScript', 'Chrome Extension API', 'Tailwind CSS', 'Local Storage'],
      visual: {
        label: 'Template Library',
        items: ['Search Templates', 'Favorite Reply', 'Insert Snippet', 'Local Storage']
      },
      actions: [
        { label: 'Live Demo', href: chromeWebStoreUrl, primary: true, external: true },
        { label: 'GitHub', href: 'https://github.com/michaelleethedev/seamless-extension', external: true },
        { label: 'Case Study', disabled: true }
      ]
    },
    {
      title: 'SkillBridge AI',
      subtitle: 'EdTech SaaS dashboard',
      status: 'Product-Style Build',
      summary: 'A tutoring dashboard concept for tracking student progress, identifying learning gaps, generating practice plans, and creating parent/admin summaries.',
      positioning: 'AI-powered learning analytics platform',
      privacy: 'Uses fictional student data only. No real student records or private education data.',
      features: [
        'Student progress dashboard with fictional records',
        'Learning gap review and skill mastery tracking',
        'Practice plan and summary generation flows',
        'Admin-friendly education analytics interface'
      ],
      tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Mock Data'],
      visual: {
        label: 'Learning Insights',
        items: ['Student Profile', 'Skill Gaps', 'Practice Plan', 'Parent Summary']
      },
      actions: [
        { label: 'Live Demo', disabled: true, primary: true },
        { label: 'GitHub', href: githubUrl, external: true },
        { label: 'Case Study', disabled: true }
      ]
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <span className="projects-kicker">Featured Projects</span>
          <h2 className="section-title">Product-style software builds</h2>
          <p className="section-subtitle">
            Three focused portfolio demos showing AI observability, browser productivity, and education analytics through polished technical interfaces.
          </p>
        </div>

        <div className="project-disclaimer">
          Portfolio demos use mock or local data only. No API keys, private user records, student records, or production credentials are included.
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
