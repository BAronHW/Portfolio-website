import React from 'react'
import './MobileNav.css'
import logo from '../../assets/images/logo.png';

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} 
    onClick={toggleMenu}>

        <div className='mobile-menu-container'>
            <img className='Logo' src={logo} alt="Logo" />

            <ul>
                <li>
                    <a className="menu-item" href="">Home</a>
                </li>
                <li>
                    <a className='menu-item' href="">Skills</a>
                </li>
                <li>
                    <a className='menu-item' href="">Work Experience</a>
                </li>
                <li>
                    <a className='menu-item' href="">Contact Me</a>
                </li>

                <button className='contact-btn' onClick={()=>{}}>
                    Hire Me
                </button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav