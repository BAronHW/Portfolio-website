import React, { useRef } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Background from "./components/Background/Background";
import Title from "./components/Title/Title";
import Design from './components/Design/Design';
import Projects from './components/Projects/Projects';

const App = () => {
  const workRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const skillRef = useRef(null);
  

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
      />
      <Title homeRef={homeRef}></Title>
      <div className="container">
        <Hero aboutRef={aboutRef}/>
      </div>
      <Background workRef={workRef} />
      <Projects></Projects>
    </>
  );
};

export default App;
