import React from 'react'
import './Contact.css'

function Contact({contactRef}) {
  return (
    <div className='contact-container' ref={contactRef}>
        <h2 className='header'>Get in touch with me here:</h2>
        <h3 className='email'>Email: <span>aaronwan808@gmail.com</span></h3>
        <h3 className='social'> 
            Social:
        </h3>
    </div>
  )
}

export default Contact