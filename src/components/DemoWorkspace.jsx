import React from 'react';
import ResolveDemo from './ResolveDemo';
import SeamlessDemo from './SeamlessDemo';
import './DemoWorkspace.css';

export default function DemoWorkspace({ project }) {
  return (
    <main className="demo-page">
      <div className="container">
        <a className="demo-back" href="#projects">← Back to selected work</a>
        <header className="demo-page-header">
          <div>
            <span className="demo-eyebrow">Interactive portfolio demo</span>
            <h1>{project.title}</h1>
            <p>{project.slug === 'resolveit'
              ? 'Resolve a VPN incident, then check the employee portal to see your changes.'
              : 'Find a template, fill its variables, and insert it into a draft.'}</p>
          </div>
          <a className="demo-secondary" href={`#/projects/${project.slug}`}>Read case study →</a>
        </header>
        <div className="demo-disclosure">{project.slug === 'resolveit'
          ? 'Fictional incident. Diagnostics and remote actions are simulated; ticket progress is saved in this browser.'
          : 'Web demo of the template workflow. It inserts into the draft below; the Chrome extension works across websites.'}</div>
        {project.slug === 'resolveit' ? <ResolveDemo /> : <SeamlessDemo storeUrl={project.store.href} />}
      </div>
    </main>
  );
}
