import React from 'react';
import ProjectCard from './project-card';
import journalImg from '../images/journal.png';
import truckdImg from '../images/truckd.png';
import temp from '../images/background.jpg';
import './projects.css';

function Projects() {
  // TODO: tech prop is temporary... switch to icons asap
  let icons = {
    // icon:
    // alt:
  }
  let tech = ['React', 'Redux', 'Node.js'];
  let sraTech = ['Node.js', 'Express', 'React', 'Apollo Client', 'graphql-yoga'];
  return (
    <section class="projects-section">
      <a class="anchor" id="projects">&nbsp;</a>
      <h2>Projects</h2>
      <ProjectCard image={truckdImg} desc="Need help moving some things? Have a truck and want to make some extra money? Get Truckd!" title="Truckd"
        github="https://github.com/thinkful-ei24/mountain-men-client" demo="https://mountain-men-truckd.herokuapp.com/"
        icons={icons} tech={tech}/>
      <ProjectCard image={temp} desc="Expand your German vocabulary using this individualized learning app. This app adjusts the questions you see depending on what words you know (and which ones you're struggling with)"
        title="German Spaced Repetition App"
        github="https://github.com/phelan97/spaced-repetition-client" demo="https://spaced-repetition-german.herokuapp.com/"
        icons={icons} tech={sraTech} />
      <ProjectCard image={journalImg} desc="An online journal that stays updated wherever you go, on any device." title="Cloud Journal"
        github="https://github.com/phelan97/journal-client" demo="https://cloud-journal.herokuapp.com/"
        icons={icons} tech={tech} />
    </section>
  );
}

export default Projects;