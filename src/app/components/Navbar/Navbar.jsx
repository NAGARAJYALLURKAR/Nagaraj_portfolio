"use client"
import { useState } from "react";
import Image from "next/image";
// import logo from './assets/images/Logo.png'
import image from "../../../../src/app/assets/images/logo.png";
import "./navbar.css";
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaFacebookSquare,
  FaLinkedin
} from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
  const [toggleMenuBar, setToggleMenuBar] = useState(false)
   const hideNavLinks = () =>{  // funtion that will hide the menu bar once we click on any menu link
    setToggleMenuBar(false)
   }
  return (
    <>
      <nav className="mainNav">
        <div className="logo">
        <a href="#home">
          <Image className="image"
            src={image} 
            alt="Nagaraj Logo" 
            width={150}
            height={40}           
          />
        </a>
        </div>
        {/* menu part */}
        <div className={toggleMenuBar ?  "menuLink mobileMenuLink" : "menuLink"}>
          <ul>
            <li className="list" >
              <a className = "aTag" href="#home" onClick={() =>hideNavLinks()}>Home</a>
            </li>
            <li className="list">
              <a className = "aTag" href="#about" onClick={() =>hideNavLinks()}>About</a>
            </li>
            <li className="list">
              <a className = "aTag" href="#projects" onClick={() =>hideNavLinks()}>Projects</a>
            </li>
            <li className="list">
              <a className = "aTag" href="#contact" onClick={() =>hideNavLinks()}>contact</a>
            </li>
          </ul>
        </div>
        {/* social media links */}
        <div className="socialMedia">
          <ul className="socialMediaDekstop">
            <li className="list">
              <a 
                className = "aTag" href="https://www.linkedin.com/in/nagaraj-yallurkar-32598220a/  " 
                target="_blank"
              >
                <FaLinkedin className="linkdin"/>
              </a>
            </li>
            <li className="list">
              <a 
                className = "aTag" href="https://github.com/NAGARAJYALLURKAR" 
                target="_blank"
              >
                <FaGithubSquare className="github"/>
              </a>
            </li>
            <li className="list">
              <a
                className = "aTag" href="https://www.instagram.com/yallurkar_nagaraj/"
                target="_blank"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li className="list">
              <a
                className = "aTag" href="https://www.facebook.com/nagaraj.yallurkar."
                target="_blank"
              >
                <FaFacebookSquare  className="facebook"/>
              </a>
            </li>
          </ul>
          <div className="hamburgerMenu">
              <button className = "bamburgerBtn" onClick={() => setToggleMenuBar(!toggleMenuBar)}>
                <GiHamburgerMenu/>
              </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
