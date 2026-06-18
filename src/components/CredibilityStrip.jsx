import React from 'react';
import './CredibilityStrip.css';

const CredibilityStrip = () => {
  const items = [
    { value: 'AI', label: 'Observability dashboard' },
    { value: 'Chrome', label: 'Published extension' },
    { value: 'EdTech', label: 'Learning analytics SaaS' },
    { value: 'Safe demos', label: 'Mock and local data only' }
  ];

  return (
    <section className="credibility-strip" aria-label="Portfolio at a glance">
      <div className="container credibility-container">
        {items.map((item) => (
          <div className="credibility-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CredibilityStrip;
