import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">SOFTWARE DEVELOPER</div>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Michael Lee.</span>
          </h1>
          <p className="hero-subtitle">
            I build AI-powered tools and full-stack web applications that solve real workflow problems.
          </p>
          <p className="hero-description">
            Computer Information Systems student with a Communication Design background, focused on clean interfaces, browser automation, APIs, and AI-assisted workflows.
          </p>
          <div className="hero-actions">
            <button 
              className="hero-button hero-button-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
            <a 
              href="https://github.com/michaelleethedev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-button hero-button-outline"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="mailto:michael.b.lee22@gmail.com?subject=Resume%20Request"
              className="hero-button hero-button-ghost"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
