import React from 'react';
import Academics from './Academics';
import Certification from './Certification';
import Course from './Course';
import './Education.css';


function Education() {
  return (
    <div id = "education__wrapper">
      <h1>Education</h1>
      <Academics/>
      <Course/>
      <Certification/>
    </div>
  )
}

export default Education
