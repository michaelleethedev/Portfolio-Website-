import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      setScrolled(window.scrollY > 50);

      const currentSection = ['hero', ...navItems.map((item) => item.id)].findLast((sectionId) => {
        const section = document.getElementById(sectionId);
        return section && section.offsetTop <= scrollPosition;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="navbar-brand" onClick={(e) => {
          e.preventDefault();
          scrollToSection('hero');
        }}>
          <span className="navbar-mark">ML</span>
          <span className="navbar-identity">
            <span className="navbar-name">Michael Lee</span>
            <span className="navbar-role">Software Developer</span>
          </span>
        </a>

        <button 
          className="navbar-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'navbar-menu-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'navbar-link-active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="navbar-mobile-actions">
            <a
              href="https://github.com/michaelleethedev"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-button navbar-button-secondary"
            >
              GitHub
            </a>
            <a
              href="mailto:michael.b.lee22@gmail.com"
              className="navbar-button navbar-button-primary"
            >
              Email
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          <a 
            href="https://github.com/michaelleethedev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="navbar-button navbar-button-secondary"
          >
            GitHub
          </a>
          <a 
            href="mailto:michael.b.lee22@gmail.com?subject=Resume%20Request" 
            className="navbar-button navbar-button-primary"
          >
            Resume
          </a>
          <a
            href="mailto:michael.b.lee22@gmail.com"
            className="navbar-button navbar-button-accent"
          >
            Email
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
