import React from 'react'
import './Background.css'

const Background = ({workRef}) => {
  return (
    <>
    <div className='background-container'>
        <div className='education-container'>
            <h2>EDUCATION</h2>
            <div className='span-container'>
                <span>Lancaster University</span>
                <span>2019</span>
            </div>
            
        </div>
        <div className='work-container' ref={workRef}>
          <div className='work-div'>
          <h2>WORK</h2>
          </div>
            
            <div className='work-right-container'>
                <div className='top-work-experience'>
                  <h2 className='work-exp-title'>Project Intern</h2>
                  <div className='top-work-exp-span-container'>
                    <span>Sun Hung Kai Properties</span>
                    <span> | </span>
                    <span>Aug 2022 - Sep 2022</span>
                    <div className='job-descrption-div'>
                      <p>Collaborated with colleagues, providing general assistance and support in various tasks to allow for a
                       smooth long-term expansion into a multi-million-dollar deal within the new Beijing Market. Conducted comprehensive customer research to gain valuable insights into prospective clients, facilitating enhanced preparation for client meetings and engagements.</p>
                    </div>
                    
                  </div>
                </div>
            </div>
            <div className='work-right-container'>
                <div className='top-work-experience'>
                  <h2 className='work-exp-title'>Assistant Teacher</h2>
                  <div className='top-work-exp-span-container'>
                    <span>Eye Level Learning</span>
                    <span> | </span>
                    <span>Mar 2019 - Jan 2021</span>
                    <div className='job-descrption-div'>
                      <p> Actively participated in a summer program that supports teachers at an educational centre in delivering a STEM summer course for primary school children. My primary responsibilities involved guiding children in fundamental subjects such as mathematics, English, and critical thinking. Additionally, I played a crucial role in assisting children with their project work, fostering their development within the STEM curriculum</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Background