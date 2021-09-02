import React from 'react';
import './Navbar.css';
import {useState} from 'react';
import Logo from './Logo';
import Menu from './Menu';

function NavBar() {
  const [active,setActive] = useState(false);
  const [latestNav, setLatestNav] = useState(true);

  const scrolling = () => {
    if(window.scrollY > 0) setActive(true);
    else setActive(false);
  }
  window.addEventListener('scroll',scrolling);  

  const nawNav = () => {
    console.log('clicked');
    if(window.screen.width <= 950){
      const main = document.getElementById('naving_main');
      setLatestNav(!latestNav);
      (latestNav) ? main.style.right = '0px' : main.style.right = '-260px';
    }
  }

  return (
    <>
    <div className = {(active) ? "navbar__container scrolling_effect" : "navbar__container"}>
      <Logo/>

      <div className = "menu__wrapper">
      <Menu/>
      </div>
      </div>
      
      <div className = "navbar__mobile" id = "naving_main">
        <button onClick = {nawNav} id="naving"><i class="fas fa-chevron-left"></i></button>
        <div>
          <Menu/>
        </div>
    </div>
    </>
  )
}

export default NavBar
