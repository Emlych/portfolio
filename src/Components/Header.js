import React from "react";
import "./header.css";
//import trigram from "../Assets/trigram.svg";
import profilepic from "../Assets/profilePic.svg";
// import linkedin from "../Assets/linkedinlight.png";
// import github from "../Assets/githublight.png";
// import codepen from "../Assets/codepen.svg";

//icons from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="header">
      <div className="header-profile">
        <img src={profilepic} alt="trigram ELD" />
        <p>
          <span>Emily</span>
        </p>
        <p>Web Dev</p>
      </div>
      <div className="header-index">
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="header-link">
        <a href="https://github.com/Emlych" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/emily-lagr%C3%A9ou-le-deunf-964107143/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://codepen.io/CalypsoLgr"
          target="_blank"
          rel="noreferrer"
          className="codepen"
        >
          <FontAwesomeIcon icon={faCodepen} />
        </a>
      </div>
    </div>
  );
}

export default Header;
