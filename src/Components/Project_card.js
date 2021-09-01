import React from 'react';
import './Card.css';


function Project_card(props) {

  return (
    <div className = {`project_card ${props.classname}`}>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <div style={{marginTop : '10px'}}> 
        <a href = {props.github}>Github</a>
        <a href = {props.hosting}>Hosting</a>
      </div>
    </div>
  )
}

export default Project_card
