import React from 'react';
import Img from 'gatsby-image';
import './project-card.css';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { checkPropTypes } from 'prop-types';

const richTextRenderOptions = {
  renderText: text => text.replace('&nbsp;', ''),
};

// TODO: image alt text
// TODO: consider adding image/thumbnail component
function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <Img objectFit="contain" fluid={props.images} alt={`app thumbnail for ${props.title}`}/>
      <div className="project-info">
        <h4 className="header-summary">Summary</h4>
        <p className="project-description">
          {props.description}
        </p>
        <h4>Technologies</h4>
        <p>{props.technologies}</p>
        <div className="project-links">
          <a className="project-button" target="_blank" rel="noopener noreferrer" href={props.github}>GitHub</a>
          <a className="project-button" target="_blank" rel="noopener noreferrer" href={props.demo}>Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;