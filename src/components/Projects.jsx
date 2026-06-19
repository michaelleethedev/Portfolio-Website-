import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const assetBase = import.meta.env.BASE_URL;

const projects = [
  {
    title: 'TraceForge AI',
    subtitle: 'AI observability dashboard',
    status: 'Featured build',
    availability: 'Demo deployment in progress',
    summary: 'A monitoring interface for understanding AI agent activity, tool calls, latency, policy events, and risk signals in one trace-level view.',
    highlights: [
      'Agent activity timeline with trace context',
      'Tool-call, latency, and policy monitoring',
      'Risk review workflow for AI oversight'
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    privacy: 'Mock activity data — no API keys or private logs.',
    visual: {
      label: 'Trace Monitor',
      items: ['Agent Run', 'Tool Call', 'Policy Event', 'Risk Review']
    },
    actions: [],
    featured: true
  },
  {
    title: 'Seamless',
    subtitle: 'Browser productivity extension',
    status: 'Published product',
    availability: 'Live on the Chrome Web Store',
    summary: 'A Chrome extension for organizing, searching, favoriting, and inserting reusable writing templates without leaving the browser.',
    highlights: [
      'Folder, search, and favorites organization',
      'One-click reusable template insertion',
      'Privacy-first local storage'
    ],
    tech: ['TypeScript', 'Chrome APIs', 'Tailwind CSS', 'Local Storage'],
    privacy: 'Templates remain local to the user’s browser.',
    image: `${assetBase}images/projects/seamless/seamless-overview.webp`,
    imageAlt: 'Seamless Chrome extension template library showing search, categories, favorites, and reusable templates',
    imageWidth: 1280,
    imageHeight: 800,
    visual: {
      label: 'Template Library',
      items: ['Search Templates', 'Favorite Reply', 'Insert Snippet', 'Local Storage']
    },
    actions: [
      {
        label: 'View on Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/seamless/phipkfflgldgfdmgenobpklmlnpekgph?hl=en',
        primary: true,
        external: true
      }
    ]
  },
  {
    title: 'SkillBridge AI',
    subtitle: 'EdTech SaaS dashboard',
    status: 'Product build',
    availability: 'Demo deployment in progress',
    summary: 'A tutoring dashboard for reviewing fictional student progress, finding learning gaps, generating practice plans, and sharing clear summaries.',
    highlights: [
      'Progress and skill-mastery dashboard',
      'Learning-gap review workflows',
      'Practice-plan and summary generation'
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    privacy: 'Fictional student records — no private education data.',
    image: `${assetBase}images/projects/skillbridge/skillbridge-dashboard.webp`,
    imageAlt: 'SkillBridge AI dashboard showing student metrics, an AI priority queue, and a weekly learning plan',
    imageWidth: 2880,
    imageHeight: 1622,
    imagePosition: 'top center',
    visual: {
      label: 'Learning Insights',
      items: ['Student Profile', 'Skill Gaps', 'Practice Plan', 'Parent Summary']
    },
    actions: []
  },
  {
    title: 'RallyTab',
    subtitle: 'Sports-bar ordering and operations platform',
    status: 'New product build',
    availability: 'Public repository',
    summary: 'A mobile-first ordering and live-tab experience that lets sports-bar guests order from their table while staff manage kitchen tickets, service requests, table activity, and menu availability.',
    highlights: [
      'Table-aware QR ordering with a persistent local cart',
      'Synchronized kitchen, order, and service workflows',
      'Live-tab splitting and staff operations dashboards'
    ],
    tech: ['Next.js 15', 'TypeScript', 'React 19', 'Tailwind CSS', 'Local Storage'],
    privacy: 'Mock checkout and demo data only — no real payments or customer records.',
    imagePair: {
      desktop: {
        src: `${assetBase}images/projects/rallytab/rallytab-dashboard.png`,
        alt: 'RallyTab staff operations dashboard showing active tabs, open orders, kitchen tickets, sales pace, and service requests',
        width: 1604,
        height: 1004
      },
      mobile: {
        src: `${assetBase}images/projects/rallytab/rallytab-mobile.png`,
        alt: 'RallyTab mobile guest experience showing a live game, table number, menu categories, and popular food items',
        width: 708,
        height: 1514
      }
    },
    visual: {
      label: 'Live Tab Operations',
      items: ['Table QR Order', 'Kitchen Queue', 'Service Requests', 'Split Tab']
    },
    actions: [
      {
        label: 'View RallyTab on GitHub',
        href: 'https://github.com/michaelleethedev/RallyTab',
        primary: true,
        external: true
      }
    ],
    wide: true
  }
];

const Projects = () => (
  <section id="projects" className="section projects">
    <div className="container">
      <div className="projects-header">
        <span className="projects-kicker">Selected work</span>
        <h2 className="section-title">Products built around real workflows</h2>
        <p className="section-subtitle">
          A focused set of products spanning AI observability, browser productivity, education analytics, and hospitality operations.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <p className="projects-note">
        Public demos and repositories are linked when available. Private source stays private while it is prepared for portfolio review.
      </p>
    </div>
  </section>
);

export default Projects;
