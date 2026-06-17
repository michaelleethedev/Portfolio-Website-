import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend & Data',
      skills: ['Python', 'C++', 'SQL', 'PostgreSQL', 'Supabase', 'APIs', 'JSON']
    },
    {
      title: 'Tools',
      skills: ['GitHub', 'VS Code', 'Linux', 'Windows', 'Vercel', 'Chrome Extension API']
    },
    {
      title: 'AI & Product',
      skills: ['OpenAI API', 'AI-assisted development', 'UX/UI design', 'testing', 'debugging', 'documentation']
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article className="skill-category-card" key={category.title}>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
