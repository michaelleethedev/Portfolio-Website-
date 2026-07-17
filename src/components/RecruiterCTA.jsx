import React from 'react';
import './RecruiterCTA.css';

const RecruiterCTA = () => (
  <aside className="recruiter-cta" aria-label="Recruiter contact actions">
    <a className="recruiter-cta-primary" href="mailto:michael.b.lee22@gmail.com?subject=Resume%20Request">Resume</a>
    <a className="recruiter-cta-secondary" href="https://github.com/michaelleethedev" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a className="recruiter-cta-secondary" href="https://linkedin.com/in/michaelleethedev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a className="recruiter-cta-primary" href="mailto:michael.b.lee22@gmail.com">Email</a>
  </aside>
);

export default RecruiterCTA;
