import React from 'react';
import './project-card.css';
import { checkPropTypes } from 'prop-types';

// TODO: image alt text
function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>Title</h3>
      <img src={props.projectImage} />
      <div className="project-info">
        <p>Text</p>
        <ul>
          <li>a</li>
          <li>b</li>
        </ul>
        <div className="project-links">
          <button>Source</button>
          <button>Demo</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;