import React from "react";
import '../src/App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Background from "./components/Background/Background";

const App = () =>{
  return(
    <>
      <Navbar/>
      <div className="container">
        <Hero></Hero>
        <Background></Background>
      </div>
    </>
  );
};

export default App