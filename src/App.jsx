import React, { useRef } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Background from "./components/Background/Background";
import Title from "./components/Title/Title";
import Design from './components/Design/Design';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import duck from './assets/images/duck.png'
import genetic from './assets/images/genetic1.png'
import library from './assets/images/Library.png'
import port from './assets/images/port.png'
import network from './assets/images/network.png'
import TYP from './assets/images/TYP.png'
import ecom from './assets/images/ecomm.png'
import './App.css'

const App = () => {
  const workRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };
  
  return (
    <>
      <Design></Design>
      <Navbar onHomeClick={() => scrollToRef(homeRef)} 
              onWorkClick={() => scrollToRef(workRef)}
              onAboutClick={() => scrollToRef(aboutRef)}
              onProjectClick={() => scrollToRef(projectRef)}
              onContactClick={() => scrollToRef(contactRef)}
      />
      <Title homeRef={homeRef} aboutRef={aboutRef}></Title>
      <div className="hero-wrapper">
        <Hero aboutRef={aboutRef}/>
      </div>
      <Background workRef={workRef} />
      <div className='project-container' ref={projectRef}>
        <h2 className='portfolio-h2'>Portfolio</h2>
        <div className='project-cards-container'>
          <Projects projectImg={genetic} projectTitle={"Genetic Algorithm Pathfinding"} projectDesc={"Engineered an efficient pathfinding solution in MATLAB, while dynamically avoiding obstacles using a ge-netic algorithm. Skillfully implemented selection, crossover, and mutation strategies in the genetic algo-rithm, integrating penalty functions for obstacle avoidance."}></Projects>
          <Projects projectImg={library} projectTitle={"E-commerce Website"} projectDesc={"Created an E-commerce website using React.js while fetching data from an API and dynamically displaying the data on the front-end"}></Projects>
          <Projects projectImg={port} projectTitle={"Portfolio Website"} projectDesc={"Designed and created this portfolio website using a tech-stack of react.js and css to demonstrate skills with react and proficiency at utilizing moern technologies to create an engaging end product"}></Projects>
          <Projects projectImg={network} projectTitle={"Re-creatng Ping and Traceroute"} projectDesc={"Completed a project focused on socket programming, utilizing the socket module to recreate classic networking tools such as Ping and Traceroute"}></Projects>
          <Projects projectImg={ecom} projectTitle={"CRUD Notes App"} projectDesc={"Created a simple fullstack CRUD app using the MERN stack(MongoDB, Express.js, React.js and Node.js). The purpose of this project was to develop a greater understanding of REST API's"}></Projects>
          <Projects projectImg={TYP} projectTitle={"Automatic grading from mammogram images"} projectDesc={"My Bachelor's thesis explored automated breast cancer diagnosis using machine learning and computer vision, employing methods like FRCNN and VGG. This project deepened my interest in AI and familiarized me with Python libraries like NumPy and Pandas for results analysis."}></Projects>
        </div>
      </div>
      <div className='contact-container'>
        <Contact contactRef={contactRef}></Contact>
      </div>
      
      <footer className='footer'>© Copyright 2024 Aaron Wan</footer>
    </>
  );
};

export default App;
