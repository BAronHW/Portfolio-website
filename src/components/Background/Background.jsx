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
                {/* <span>|</span> */}
                <span>2019</span>
            </div>
            
        </div>
        <div className='work-container' ref={workRef}>
            <h2>WORK</h2>
            <div className='work-right-container'>
                <div className='top-work-experience'>
                  <h2 className='work-exp-title'>Project Intern</h2>
                  <div className='top-work-exp-span-container'>
                    <span>Sun Hung Kai Properties</span>
                    <span>|</span>
                    <span>Aug 2022 - Sep 2022</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Background