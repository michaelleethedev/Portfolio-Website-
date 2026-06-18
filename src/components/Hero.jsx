import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-badge">Michael Lee — Software Builder</p>
          <h1 className="hero-title">
            Turning real problems into <span className="hero-name">working products.</span>
          </h1>
          <p className="hero-description hero-description-lead">
            I’m a Computer Information Systems student with a communication design background, building full-stack apps, browser tools, and AI-powered software with a focus on practical use and clean experiences.
          </p>
          <div className="hero-actions">
            <button className="hero-button hero-button-primary" onClick={scrollToProjects}>
              Explore my work
              <span aria-hidden="true">↓</span>
            </button>
            <a
              href="https://github.com/michaelleethedev"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-outline"
            >
              View GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
