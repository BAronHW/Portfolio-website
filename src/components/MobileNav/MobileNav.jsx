import React from 'react'
import './MobileNav.css'
import logo from '../../assets/images/logo.png';

const MobileNav = ({isOpen, toggleMenu, onHomeClick, onWorkClick, onAboutClick, onProjectClick, onContactClick}) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} 
    onClick={toggleMenu}>

        <div className='mobile-menu-container'>
            {/* <img className='Logo' src={logo} alt="Logo" /> */}
            <h2 className='Logo'>Aaron Wan</h2>

            <ul>
                <li>
                    <a className="menu-item" onClick={onAboutClick}>About</a>
                </li>
                <li>
                    <a className='menu-item' onClick={onProjectClick}>Projects</a>
                </li>
                <li>
                    <a className='menu-item' onClick={onWorkClick}>Work Experience</a>
                </li>
                <li>
                    <a className='menu-item' onClick={onContactClick}>Contact Me</a>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav