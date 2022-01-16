import React from "react";
import "./cardskill.css";

function Cardskill({
  skilltype,
  skillname1,
  skillname2,
  skillname3,
  skillname4,
}) {
  return (
    <div className="cardskill">
      <div className="box">
        <span></span>
        <div className="content">
          <h2>{skilltype}</h2>

          <ul className="card-list">
            <li>{skillname1}</li>
            <li>{skillname2}</li>
            <li>{skillname3}</li>
            <li>{skillname4}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardskill;
