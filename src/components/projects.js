import React from 'react';
import ProjectCard from './project-card';
import {StaticQuery, graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import './projects.css';

function Projects() {
  return (
    <StaticQuery query={projectDetailsQuery} render={data => (
      <section id="projects">
        <h2>Projects</h2>
        <ul className="project-listing">
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
      </section>
    )}/>
  );
}

const projectDetailsQuery = graphql`
{
  allContentfulProjectDetails {
    edges {
      node {
        id
        title
        githubLink
        hostedLink
        createdAt
        technologies
        description {
          description
        }
        ...thumbnailData
      }
    }
  }
}
fragment thumbnailData on ContentfulProjectDetails {
  thumbnail {
    fluid(maxWidth: 600, resizingBehavior: PAD) {
      sizes
      src
      srcSet
      srcSetWebp
      srcWebp
      tracedSVG
      base64
    }
	}
}
`

export default Projects;