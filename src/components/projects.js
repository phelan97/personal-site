import React from 'react';
import ProjectCard from './project-card';
// import journalImg from '../images/journal.png';
// import truckdImg from '../images/truckd.png';
// import sraImg from '../images/learn-german.png';
// import boardImg from '../images/bulletin-board.png';
import {StaticQuery, graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import './projects.css';

function Projects() {
  // TODO: tech prop is temporary... switch to icons asap
  let icons = {
    // icon:
    // alt:
  }
  let tech = ['React', 'Redux', 'Node.js'];
  let graphqlTech = ['Node.js', 'Express', 'React', 'Apollo Client', 'graphql-yoga'];
  let sraTech = ['Node.js', 'Express', 'React', 'Apollo Client', 'graphql-yoga', 'Next.js'];
  // TODO: extract data and store it separately
  // FIXME: temporarily render in paragraph form instead of as a list
  let techStr = tech.join(', ');
  let graphqlTechStr = graphqlTech.join(', ');
  let sraTechStr = sraTech.join(', ');
  // TODO: missing image loading
  return (
    <StaticQuery query={projectDetailsQuery} render={data => (
        data.allContentfulProjectDetails.edges.map(({node}) => (
          <ProjectCard
          key={node.id}
          desc={documentToReactComponents(JSON.parse(node.description.description))} title={node.title}
          github={node.githubLink} demo={node.hostedLink}
          >{console.log(JSON.parse(node.description.description))}</ProjectCard>
        ))
    )}/>
  );
}

{/*  */}
    
{/* <StaticQuery query={projectDetailsQuery} render={data => (
  data.allContentfulProjectDetails.edges.map(edge => (
    <ProjectCard
      key={node.id}
      desc={node.description} title={node.title}
      github={node.githubLink} demo={node.hostedLink}
    />
  ))
)}/> */}
    // return (
    //   <section className="projects-section" id="projects">
    //     <h2>Projects</h2>
    //     {data.allContentfulProjectDetails.edges.map(node => (
    //     <ProjectCard key={node.id}
    //       desc={node.description} title={node.title}
    //       github={node.githubLink} demo={node.hostedLink}/>
    //   ))}
    //   </section>
    //   );
    // }}/>

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
      }
    }
  }
}
`

export default Projects;

  
  // <ProjectCard image={truckdImg} desc="Need help moving some things? Have a truck and want to make some extra money? Get Truckd!" title="Truckd"
  //   github="https://github.com/thinkful-ei24/mountain-men-client" demo="https://mountain-men-truckd.herokuapp.com/"
  //   icons={icons} tech={tech} techStr={techStr}/>
  // <ProjectCard image={boardImg} desc="One of my side projects to practice GraphQL. This app implements functionality similar to Trello, and will continue to be updated as I have the opportunity to add new features." title="Bulletin Board"
  //   github="https://github.com/phelan97/bulletin-board-client" demo="https://graphql-bulletin-board.herokuapp.com/demo"
  //   icons={icons} tech={tech} techStr={graphqlTechStr}/>
  // <ProjectCard image={sraImg} desc="Expand your German vocabulary using this individualized learning app. This app adjusts the questions you see depending on what words you know (and which ones you're struggling with)"
  //   title="Learn German"
  //   github="https://github.com/phelan97/spaced-repetition-client" demo="https://spaced-repetition-german.herokuapp.com/"
  //   icons={icons} tech={graphqlTech} techStr={sraTechStr}/>
  // <ProjectCard image={journalImg} desc="An online journal that stays updated wherever you go, on any device." title="Cloud Journal"
  //   github="https://github.com/phelan97/journal-client" demo="https://cloud-journal.herokuapp.com/"
  //   icons={icons} tech={tech} techStr={techStr}/>