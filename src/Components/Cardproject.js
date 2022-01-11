import React from "react";
import "./cardproject.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faLeaf, faLink } from "@fortawesome/free-solid-svg-icons";

function Cardproject({ _id, name, techno, description, url, image }) {
  function iconSelector(icon) {
    switch (icon) {
      case "javascript":
        return <FontAwesomeIcon icon={faJsSquare} />;

      case "react":
        return <FontAwesomeIcon icon={faReact} />;

      case "react-native":
        return <FontAwesomeIcon icon={faMobileAlt} />;

      case "github":
        return <FontAwesomeIcon icon={faGithubSquare} />;

      case "mongo-db":
        return <FontAwesomeIcon icon={faLeaf} />;

      default:
        return null;
    }
  }
  return (
    <div className="cardproject">
      <div className="card-footer" style={{ backgroundImage: `src(${image})` }}>
        <div className="card-bubble">
          <a href={url} target="_blank" rel="noreferrer" className="bubble">
            <FontAwesomeIcon icon={faLink} />
          </a>
          {techno.map((item, i) => (
            <div className="bubble" key={i}>
              {iconSelector(item)}
            </div>
          ))}
        </div>
        <svg id="curve" xmlns="http://www.w3.org/2000/svg">
          <path
            id={`p-${_id}`}
            d="M0,200 Q80,100 400,200 V150 H0 V50"
            transform="translate(0 300)"
          />
          <rect
            id={`dummyRect-${_id}`}
            x="0"
            y="0"
            height="450"
            width="400"
            fill="transparent"
          />
          {/* slide up */}
          <animate
            href={`#p-${_id}`}
            attributeName="d"
            to="M0,50 Q80,100 400,50 V150 H0 V50"
            fill="freeze"
            begin={`dummyRect-${_id}.mouseover`}
            end={`dummyRect-${_id}.mouseout`}
            dur="0.1s"
            id={`bounce1-${_id}`}
          />
          {/* slide up and curve in */}
          <animate
            href={`#p-${_id}`}
            attributeName="d"
            to="M0,50 Q80,0 400,50 V150 H0 V50"
            fill="freeze"
            begin={`bounce1-${_id}.end`}
            end={`dummyRect-${_id}.mouseout`}
            dur="0.15s"
            id={`bounce2-${_id}`}
          />
          {/* slide down and curve in */}
          <animate
            href={`#p-${_id}`}
            attributeName="d"
            to="M0,50 Q80,80 400,50 V150 H0 V50"
            fill="freeze"
            begin={`bounce2-${_id}.end`}
            end={`dummyRect-${_id}.mouseout`}
            dur="0.15s"
            id={`bounce3-${_id}`}
          />
          {/* slide down and curve out */}
          <animate
            href={`#p-${_id}`}
            attributeName="d"
            to="M0,50 Q80,45 400,50 V150 H0 V50"
            fill="freeze"
            begin={`bounce3-${_id}.end`}
            end={`dummyRect-${_id}.mouseout`}
            dur="0.1s"
            id={`bounce4-${_id}`}
          />
          {/* curve in */}
          <animate
            href={`#p-${_id}`}
            attributeName="d"
            to="M0,50 Q80,50 400,50 V150 H0 V50"
            fill="freeze"
            begin={`bounce4-${_id}.end`}
            end={`dummyRect-${_id}.mouseout`}
            dur="0.05s"
            id={`bounce5-${_id}`}
          />

          <animate
            href={`#p-${_id}`}
            attributeName="d"
            to="M0,200 Q80,100 400,200 V150 H0 V50"
            fill="freeze"
            begin={`dummyRect-${_id}.mouseout`}
            dur="0.15s"
            id={`bounceOut-${_id}`}
          />
        </svg>
        <div className="card-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-blur"></div>
    </div>
  );
}

export default Cardproject;
