import React from 'react'
import './Hero.css'
import jsicon from '../../assets/images/js.png'
import cssicon from '../../assets/images/css-3.png'
import htmlicon from '../../assets/images/html-5.png'
import reactlogo from '../../assets/images/React-icon.png'
import duckicon from '../../assets/images/duck.png'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>About me</h2>
            <p>
                I am originally from Hong Kong and I moved to the UK in 2019 at the age of 16 
                for my sixth-form education. Currently I am studying at Lancaster University
                and am a final year student with the intention of finding a tech job in the UK.
                I am interested in all things tech related and currently I am most curious about
                the world of cyber-security and am currently doing the Jr Pentesting pathway on 
                tryhackme. I enjoy creating and programming things that people are able to use in 
                different settings.
            </p>
        </div>

        <div className='hero-img'>
            <div className='tech-icon'>
                <img src={reactlogo} alt="react-logo" />
            </div>
            <div className='tech-icon'>
                <img src={htmlicon} alt="html-icon" />
            </div>
            <div className='tech-icon'>
                <img src={cssicon} alt="css-icon" />
            </div>
            <div className='tech-icon'>
                <img src={jsicon} alt="js-icon" />
            </div>
        </div>
    </section>
  )
}

export default Hero