import React from 'react';
import ProjectCard from './project-card';
import {StaticQuery, graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import './projects.css';

function Projects() {
  return (
    <StaticQuery query={projectDetailsQuery} render={data => (
      <ul class="project-listing">
        {data.allContentfulProjectDetails.edges.map(({node}) => (
          <li>
            <ProjectCard
              key={node.id} images={node.thumbnail.fluid}
              desc={documentToReactComponents(JSON.parse(node.description.description))} title={node.title}
              github={node.githubLink} demo={node.hostedLink} technologies={node.technologies.join(", ")}
            />
          </li>
        ))}
      </ul>
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
          fluid(maxWidth: 600) {
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
}
`

export default Projects;