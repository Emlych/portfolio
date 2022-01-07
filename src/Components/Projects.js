import React from "react";
import Cardproject from "./Cardproject";
import "./projects.css";
import randomquote from "../Assets/randomquote.png";

const projects = [
  {
    name: "Random quote generator",
    techno: ["javascript"],
    description: "Free code camp exercice",
    url: "https://codepen.io/CalypsoLgr/full/porYyjE",
    image: randomquote,
  },
  {
    name: "second project",
    techno: ["react", "javascript"],
    description: "Free code camp exercice",
    url: "https://codepen.io/CalypsoLgr/full/porYyjE",
    image: randomquote,
  },
  {
    name: "third project",
    techno: ["react", "javascript"],
    description: "Free code camp exercice",
    url: "https://codepen.io/CalypsoLgr/full/porYyjE",
    image: randomquote,
  },
];

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <p className="description">
        Here are a few projects I've worked on recently.
      </p>
      <div className="projects-list">
        {projects.map((project, index) => {
          return <Cardproject key={index} {...project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
