import React, { useEffect, useState } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', ...navItems.map((item) => item.id)];
    let frameId;

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 280;
        const currentSection = sectionIds.reduce((current, sectionId) => {
          const section = document.getElementById(sectionId);
          return section && section.offsetTop <= scrollPosition ? sectionId : current;
        }, 'hero');

        setScrolled(window.scrollY > 40);
        setActiveSection(currentSection);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth > 968) setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} aria-label="Primary navigation">
      <div className="container navbar-container">
        <a
          href="#hero"
          className="navbar-brand"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection('hero');
          }}
        >
          <span className="navbar-mark" aria-hidden="true">ML</span>
          <span className="navbar-identity">
            <span className="navbar-name">Michael Lee</span>
            <span className="navbar-role">Software Developer</span>
          </span>
        </a>

        <button
          className={`navbar-toggle ${mobileMenuOpen ? 'navbar-toggle-open' : ''}`}
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-navigation-menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          id="primary-navigation-menu"
          className={`navbar-menu ${mobileMenuOpen ? 'navbar-menu-open' : ''}`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'navbar-link-active' : ''}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={(event) => {
                  event.preventDefault();
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
            <a href="mailto:michael.b.lee22@gmail.com" className="navbar-button navbar-button-primary">
              Email me
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
          <a href="mailto:michael.b.lee22@gmail.com" className="navbar-button navbar-button-primary">
            Email me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
