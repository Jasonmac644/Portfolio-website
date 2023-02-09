import React from "react"
import './navbar.css'

const NavBar = () => (
  <section id="navbar">
    <div id="navbar">
      <ul className="menu__box">
        <li><a className="menu__item hover-underline-animation" href="./index.html">Home</a></li>
        <li><a className="menu__item hover-underline-animation" href="./index.html" id="aboutme">About me</a></li>
      </ul>
      <div className="nav-header">
        JASON <div>MACDONALD</div>
      </div>
      <ul className="menu__box">
        <li><a className="menu__item hover-underline-animation" href="./index.html" id="project">Projects</a></li>
        <li><a className="menu__item hover-underline-animation" href="./index.html">Contact</a></li>
      </ul>
    </div>
  </section>
);

export default NavBar;
