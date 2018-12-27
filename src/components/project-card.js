import React from 'react';
import './project-card.css';
import { checkPropTypes } from 'prop-types';

// TODO: image alt text
function ProjectCard(props) {
  // TODO: Map icon data to a list and display it. Remove tech prop
  // props.icons
  const listData = props.tech.map(str => <li>{str}</li>);
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <img src={props.image} />
      <div className="project-info">
        <p>{props.desc}</p>
        <ul>
          {listData}
        </ul>
        <div className="project-links">
          <button>GitHub</button>
          <button>Demo</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;