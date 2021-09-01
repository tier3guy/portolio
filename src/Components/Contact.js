import React from 'react';
import './Contact.css';
import img from '../Assets/hero (2).jpg';

function Contact() {
  return (
    <div id="contact__wrapper">
      <img src = {img} id="img__img"/>
      <div className = "contacts">
        <h1>Connect With Me</h1>
        <p>When you're sitting at your desk unsure if you're actually going to go to the networking event you've had penciled on your calendar, it's important you muster up both the energy and the motivation to power through and channel the confidence you need to make authentic connections</p>
        <div>
          <a href = "https://www.linkedin.com/in/avinash-gupta-3321041ba/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          <a href = "https://www.facebook.com/profile.php?id=100042540223986" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href = "https://www.instagram.com/gupta_g_62/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href = "https://www.youtube.com/channel/UCwxisguWu-DSj-i0fSc1L1g" target="_blank"><i class="fab fa-youtube"></i></a>
          <a href = "https://twitter.com/Avinash35925012" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href = "https://github.com/tier3guy" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
