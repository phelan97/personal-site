import React from 'react';
import ProjectCard from './project-card';
import {StaticQuery, graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import './projects.css';

function Projects() {
  return (
    <StaticQuery query={projectDetailsQuery} render={data => (
        data.allContentfulProjectDetails.edges.map(({node}) => (
          <ProjectCard
          key={node.id} image={node.thumbnail.file.url}
          desc={documentToReactComponents(JSON.parse(node.description.description))} title={node.title}
          github={node.githubLink} demo={node.hostedLink} technologies={node.technologies.join(", ")}
          >{console.log(node.technologies)}</ProjectCard>
        ))
    )}/>
  );
}

const projectDetailsQuery = graphql`
{
  allContentfulProjectDetails {
    edges {
      node {
        title
        githubLink
        hostedLink
        createdAt
        technologies
        description {
          description
        }
        thumbnail {
          file {
            url
          }
        }
      }
    }
  }
}
`

export default Projects;