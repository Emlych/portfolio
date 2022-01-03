import React from "react";
import "./card.css";

function Card({ skilltype, skillname }) {
  return (
    <div className="card">
      <div className="cardfront">
        <h2>{skilltype}</h2> iukhiuhh
      </div>

      <div className="cardback">
        <ul>
          <li>{skillname}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
