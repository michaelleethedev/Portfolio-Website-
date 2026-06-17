import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Michael Lee</h3>
            <p className="footer-tagline">
              Building AI-powered tools and full-stack web applications that solve real workflow problems.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-link-group">
              <h4 className="footer-link-title">Navigation</h4>
              <a href="#about" className="footer-link">About</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>

            <div className="footer-link-group">
              <h4 className="footer-link-title">Connect</h4>
              <a href="https://github.com/michaelleethedev" target="_blank" rel="noopener noreferrer" className="footer-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/michaelleethedev" target="_blank" rel="noopener noreferrer" className="footer-link">
                LinkedIn
              </a>
              <a href="mailto:michael.b.lee22@gmail.com" className="footer-link">
                Email
              </a>
              <a href="mailto:michael.b.lee22@gmail.com?subject=Resume%20Request" className="footer-link">
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Michael Lee. All rights reserved.
          </p>
          <p className="footer-built">
            Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
