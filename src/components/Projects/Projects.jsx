import React from 'react'
import './Projects.css'

function Projects({projectImg,projectTitle, projectDesc}) {
  return (
    <div className='project-card-container'>
      <div className='inner-container'>
        <img src={projectImg} alt="Failed to load image" />
        <div className='project-card-bottom'>
          <h2 className='project-title-name'>{projectTitle}</h2>
          <p className='project-desc'>{projectDesc}</p>
        </div>
      </div>
    </div>
  )
}

export default Projects