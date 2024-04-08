import React, { useRef } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Background from "./components/Background/Background";

const App = () => {
  // Create a ref to the work section
  const workRef = useRef(null);

  // Function to handle scrolling
  const scrollToWork = () => {
    workRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToWork={scrollToWork} />
      <div className="container">
        <Hero />
      </div>
      {/* Assign the ref to the Background component */}
      <Background workRef={workRef} />
    </>
  );
};

export default App;
