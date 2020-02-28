import React from 'react';
import ProjectCard from './project-card';
import {StaticQuery, graphql} from 'gatsby';
import './projects.css';

function Projects() {
  return (
    <StaticQuery query={projectDetailsQuery} render={data => (
      <section id="projects">
        <h2>Projects</h2>
        <ul className="project-listing">
          {data.allContentfulProjectDetails.edges.map(({node}) => {
            console.log(node.description.description)
            return (
            <li>
              <ProjectCard
                key={node.id} images={node.thumbnail.fluid}
                description={node.description.description} title={node.title}
                github={node.githubLink} demo={node.hostedLink} technologies={node.technologies.join(", ")}
              />
            </li>
          )})}
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
    fluid(maxWidth: 600) {
      ...GatsbyContentfulFluid_withWebp_noBase64
      tracedSVG
    }
	}
}
`

export default Projects;