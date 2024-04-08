import React, { useRef } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Background from "./components/Background/Background";
import Title from "./components/Title/Title"

const App = () => {
  const workRef = useRef(null);
  const homeRef = useRef(null);
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
      <Navbar onHomeClick={() => scrollToRef(homeRef)} 
              onWorkClick={() => scrollToRef(workRef)}/>
      <Title homeRef={homeRef}></Title>
      <div className="container">
        <Hero />
      </div>
      {/* Assign the ref to the Background component */}
      <Background workRef={workRef} />
    </>
  );
};

export default App;
