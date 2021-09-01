import React from 'react';
import './Project.css';
import Card from './Project_card';
import Data from './Project_data';

function Projects() {

  function CardObtainer(item){
    return <Card name = {item.name}
                 desc = {item.desc}
                 github = {item.github}
                 hosting = {item.hosting}
                 classname = {item.classname}/>
  }

  return (
    <div id = "project__wrapper">
      <h1>My Works</h1>
      <div className = "projects">
        {
          Data.map(CardObtainer)
        }
      </div>
    </div>
  )
}

export default Projects
