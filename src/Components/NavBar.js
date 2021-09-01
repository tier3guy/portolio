import React from 'react';
import './Navbar.css';
import {useState} from 'react';

function NavBar() {
  const [active,setActive] = useState(false);

  const scrolling = () => {
    if(window.scrollY > 0) setActive(true);
    else setActive(false);
  }
  window.addEventListener('scroll',scrolling);


  return (
    <div className = {(active) ? "navbar__container scrolling_effect" : "navbar__container"}>
      <a href = "#" id="to_home">
        <div id = "logo">
        <h1>Programmer</h1>
        <h2>Gupta 🚀</h2>
        </div>
      </a>

      <div className = "menu__wrapper">
        <ul>
          <li><a href = "#about__wrapper">About Me</a></li>
          <li><a href = "#education__wrapper">Education</a></li>
          <li><a href = "#skills__wrapper">Skills</a></li>
          <li><a href = "#contact__wrapper">Contact</a></li>
          <li><a href = "#">Blogs</a></li>
          <li><a href = "#" id = "resume">Resume</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
