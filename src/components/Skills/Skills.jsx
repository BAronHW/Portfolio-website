import React from 'react';
import './Skills.css';

const SkillBar = ({ skill, level }) => {
  return (
    <div className="skill-bar">
      <div className="skill-title">{skill}</div>
      <div className="skill-level-container">
        <div className="skill-level" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

const Skills = ({ skills }) => {
    return (
      <div className="skills-section">
        <h2>SKILLS</h2>
        <div className="skills-container">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;