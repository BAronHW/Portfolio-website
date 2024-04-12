import React, { useState } from 'react';
import './Projects.css';

function Projects({ projectImg, projectTitle, projectDesc }) {
  const [hover, setOnHover] = useState(false);

  return (
    <div className='project-card-container'
         onMouseEnter={() => setOnHover(true)} 
         onMouseLeave={() => setOnHover(false)}>
      <div className='inner-container'>
        <div className='project-card-top'>
          <img src={projectImg} alt="Project" />
        </div>
        <div className={`project-card-bottom ${hover ? "show" : ""}`}>
          <h2 className='project-title-name'>{projectTitle}</h2>
          <p className='project-desc'>{projectDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;

