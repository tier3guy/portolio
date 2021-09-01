import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div id = "skills__wrapper">
      <div id="skill__container">
        <h1>Skill sets</h1>
        <div className = "skills">
          <button className = "btn__primary">C++</button>
          <button className = "btn__primary">Python Basics</button>
          <button className = "btn__primary">HTML</button>
          <button className = "btn__primary">CSS</button>
          <button className = "btn__primary">Javascript</button>
          <button className = "btn__secondary">React JS</button>
          <button className = "btn__secondary">Bootstrap</button>
          <button className = "btn__secondary">Git / Github</button>
          <button className = "btn__secondary">Problem Solving</button>
          <button className = "btn__secondary">DSA</button>
        </div>
      </div>
    </div>
  )
}

export default Skills
