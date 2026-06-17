import React from 'react';
import './CredibilityStrip.css';

const CredibilityStrip = () => {
  const items = [
    {
      title: 'AI Observability Concept',
      text: 'TraceForge AI explores agent traces, tool calls, policy events, and risk review'
    },
    {
      title: 'Published Chrome Extension',
      text: 'Seamless is a browser productivity tool available on the Chrome Web Store'
    },
    {
      title: 'EdTech SaaS Dashboard',
      text: 'SkillBridge AI uses fictional student data for learning analytics workflows'
    },
    {
      title: 'Mock + Local Data',
      text: 'Portfolio demos avoid private records, API keys, and production credentials'
    }
  ];

  return (
    <section className="credibility-strip" aria-label="Portfolio credibility highlights">
      <div className="container credibility-container">
        {items.map((item) => (
          <article className="credibility-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CredibilityStrip;
