import React from 'react';
import pic from '../Assets/hero (4).jpg';
import './About.css';

function About() {
  return (
    <div id = "about__wrapper">
      <div className = "pic__wrapper">
        <img src = {pic} id = "pic"/>
      </div>
      <div className = "about__text">
        <h1>About Me</h1>
        <p>Hi folk! let me introduce myself I am Avinash and right now I am a student and pursuing my Bachelors in Information and Technology. I am self learner and loves to teach mathematics.</p>

        <p>I am also an open-source enthusiat and who loves to do contribution in open source projects. I recently joined <a>FOSSASIA</a> orgranisation. In my past I did contributions in <a>GSSoC</a> in a frontend project called Algo-Phantoms.</p>

        <p>Currently I am looking forward in backend and learning NodeJS.</p>

        <a href = "https://drive.google.com/file/d/1_s2iWXLaH6Uk7YFsqVuD8ggbJ7ruHsBR/view" target="_blank"><button className = "btn__primary">Download Resume</button></a>
      </div>
    </div>
  )
}

export default About
