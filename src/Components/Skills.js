import React from "react";
import Cardskill from "./Cardskill";
import "./skills.css";

const skills = [
  {
    skilltype: "Front end",
    skillname1: "HTML5, CSS3, Javascript",
    skillname2: "React",
    skillname3: "React Native",
  },
  {
    skilltype: "Back end",
    skillname1: "Node.js",
    skillname2: "Mongo DB",
    skillname3: "Express, Heroku",
  },
  {
    skilltype: "softskill",
    skillname1: "Project Management",
    skillname2: "Team Management",
    skillname3: "Empathy and Creativity",
  },
  {
    skilltype: "hardskill",
    skillname1: "English / German / Chinese",
    skillname2: "Adobe Illustrator, In Design",
  },
];

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills-left">
        <h2>Skills</h2>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia inima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?"
        </p>
      </div>

      <div className="skills-right">
        {skills.map((skill, index) => {
          return <Cardskill key={index} {...skill} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
