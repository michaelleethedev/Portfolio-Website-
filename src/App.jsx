import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredibilityStrip from './components/CredibilityStrip';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDemoModal from './components/ProjectDemoModal';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RecruiterCTA from './components/RecruiterCTA';
import { getProjectBySlug } from './data/projects';
import './App.css';

const DemoWorkspace = lazy(() => import('./components/DemoWorkspace'));

function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [activeDemoProject, setActiveDemoProject] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const nextHash = window.location.hash;
      setHash(nextHash);
      if (nextHash.startsWith('#/projects/') || nextHash.startsWith('#/demos/')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeProject = useMemo(() => {
    const match = hash.match(/^#\/projects\/([a-z0-9-]+)$/);
    return match ? getProjectBySlug(match[1]) : null;
  }, [hash]);

  const demoMatch = hash.match(/^#\/demos\/(resolveit|seamless)$/);
  const demoProject = demoMatch ? getProjectBySlug(demoMatch[1]) : null;

  useEffect(() => {
    document.title = activeProject || demoProject
      ? `${(activeProject || demoProject).title} | Michael Lee`
      : 'Michael Lee - Full-Stack Software Developer';
    if (!activeProject && !demoProject && /^#[a-z]+$/.test(hash)) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash, activeProject, demoProject]);

  useEffect(() => {
    if (activeProject) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeProject]);

  const goHome = () => {
    window.location.hash = '';
    window.setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <div className="app">
      <Navbar />
      {demoProject ? (
        <Suspense fallback={<main className="container" style={{ paddingTop: 130 }}><p role="status">Loading demo…</p></main>}>
          <DemoWorkspace key={demoProject.slug} project={demoProject} />
        </Suspense>
      ) : activeProject ? (
        <ProjectDetail
          project={activeProject}
          onBack={goHome}
          onOpenDemo={() => setActiveDemoProject(activeProject)}
        />
      ) : (
        <main>
          <Hero />
          <CredibilityStrip />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </main>
      )}
      {!demoProject && <RecruiterCTA />}
      {activeDemoProject && (
        <ProjectDemoModal
          project={activeDemoProject}
          onClose={() => setActiveDemoProject(null)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
