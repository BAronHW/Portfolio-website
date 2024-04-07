import React from 'react'
import './Background.css'

const Background = () => {
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
        <div className='work-container'>
            <h2>WORK</h2>
            <div className='work-right-container'></div>
        </div>
    </div>
    </>
  )
}

export default Background