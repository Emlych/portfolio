import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="about">
      <div className="scroll-left">
        <FontAwesomeIcon icon={faArrowLeft} /> scroll down
      </div>
      <div className="about-content">
        <h1>
          <span>E</span>mily <span>LD</span>,
          <br />
          Web Developer
        </h1>
        <h3>
          <FontAwesomeIcon icon={faSync} /> Creative
        </h3>
        <button>Contact me</button>
      </div>
      <div className="scroll-right">
        <FontAwesomeIcon icon={faArrowLeft} /> scroll down
      </div>
    </div>
  );
}

export default About;
