import React, { useState, useRef } from 'react';
import './Navbar.css'
import logo from '../assets/images/logo.png'
import MobileNav from './MobileNav/MobileNav';


const Navbar = ({onHomeClick, onWorkClick, onAboutClick}) => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    }

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}></MobileNav>
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <h1 className='logo'>Aaron Wan</h1>

            <ul>
                <li>
                    <a className='menu-item' onClick={onHomeClick}>Home</a>
                </li>
                <li>
                    <a className='menu-item' onClick={onAboutClick}>About Me</a>
                </li>
                <li>
                    <a className='menu-item' >Skills</a>
                </li>
                <li>
                    <a className='menu-item' onClick={onWorkClick}>Work Experience</a>
                </li>
                <li>
                    <a className='menu-item' >Contact Me</a>
                </li>
            </ul>

            <button className='menu-btn' onClick={toggleMenu}>
             <span class={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
                {openMenu ? "close" : "menu"}
             </span>
            </button>
            
        </div>
    </nav>
    </>
  )
}

export default Navbar
