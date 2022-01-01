import React from "react";
import trigram from "../Assets/trigram.svg";
import linkedin from "../Assets/linkedin.png";
import github from "../Assets/githublight.png";

function Header() {
  return (
    <div className="header">
      <div className="header-profile">
        <img src={trigram} alt="trigram ELD" />
        <p>Web Dev</p>
      </div>
      <div className="header-index">
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </nav>
      </div>
      <div className="header-link">
        <a href="https://github.com/Emlych" target="_blank" rel="noreferrer">
          <img src={github} alt="github logo" />
        </a>

        <a
          href="https://www.linkedin.com/in/emily-lagr%C3%A9ou-le-deunf-964107143/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin logo" />
        </a>
      </div>
    </div>
  );
}

export default Header;
