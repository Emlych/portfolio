import React from "react";
import "./about.css";
import Type from "./Type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="about" id="about">
      <div className="scroll-left">
        <FontAwesomeIcon icon={faArrowLeft} /> scroll down
      </div>
      <div className="about-content">
        <h1>
          Hello,
          <br />I am <span>Emily LD</span>!
          <div className="about-type">
            <Type />
          </div>
        </h1>

        <button>Contact me</button>
      </div>
      <div className="scroll-right">
        <FontAwesomeIcon icon={faArrowLeft} /> scroll down
      </div>
    </div>
  );
}

export default About;
