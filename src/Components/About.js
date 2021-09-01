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
        <p>People find writing about themselves difficult. The question of how to distill your work down to a short, simple description is difficult regardless of how long you’ve been in your profession. The goal of creating an About Me page is to help you market yourself.</p>

        <p>You want to make sure visitors and readers to your site understand your work—but you don’t want to go into too much detail and create a long essay about yourself in case they lose interest. You want to mention recognition you’ve received and exciting projects you’ve completed—but you don’t want to seem like you’re bragging.</p>

        <a href = "https://drive.google.com/file/d/1_s2iWXLaH6Uk7YFsqVuD8ggbJ7ruHsBR/view" target="_blank"><button className = "btn__primary">Download Resume</button></a>
      </div>
    </div>
  )
}

export default About
