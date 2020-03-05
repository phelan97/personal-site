import React from 'react';
import Img from 'gatsby-image';
import './project-card.css';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { checkPropTypes } from 'prop-types';
import Skeleton from 'react-loading-skeleton';

const richTextRenderOptions = {
  renderText: text => text.replace('&nbsp;', ''),
};

// TODO: image alt text
// TODO: consider adding image/thumbnail component
function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title || <Skeleton width={"20em"}/>}</h3>
      {props.images ? <Img objectFit="contain" fluid={props.images} alt={`app thumbnail for ${props.title}`}/>
        : <Skeleton height={"100%"}/>}
      <div className="project-info">
        <h4 className="header-summary">Summary</h4>
        <p className="project-description">
          {props.description || <Skeleton/>}
        </p>
        <h4>Technologies</h4>
        <p>{props.technologies || <Skeleton />}</p>
        <div className="project-links">
          {props.github ? <a className="project-button" target="_blank" rel="noopener noreferrer"
            href={props.github}>GitHub</a> : <Skeleton width={"100%"} count={2}/>}
          {props.demo ? <a className="project-button" target="_blank" rel="noopener noreferrer"
            href={props.demo}>Demo</a> : <Skeleton width={"100%"} count={2} height={"100%"} style={{flex: 1}}/>}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;