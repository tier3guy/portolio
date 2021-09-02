import React from 'react';
import './Hero.css';
import hero from '../Assets/hero (1).jpg';

function Hero() {
  return (
    <div  className = "hero__wrapper">
      <div className = "hero__text">
      <h1>Avinash Gupta</h1>
      <h3>I am a frontend web-developer and Software Engineering Student</h3>
      <div>
        <a href = "https://drive.google.com/file/d/15zHgjn3fBrdxMPoC-sUN_bA3N1rgFy-9/view?usp=sharing" target="_blank"><button className = "btn__primary">Download Resume</button></a>
        <a href = "#project__wrapper"><button className = "btn__secondary">My Work</button></a>
      </div>
      </div>
      <div id = "hero__img">
        <img src = {hero} id="img"/>
      </div>
    </div>
  )
}

export default Hero
