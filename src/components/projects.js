import React from 'react';
import ProjectCard from './project-card';
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
      <ProjectCard image={temp} desc="Need help moving some things? Have a truck and want to make some extra money? Get Truckd!" title="Truckd"
        icons={icons} tech={tech}/>
      <ProjectCard image={temp} desc="Expand your German vocabulary using this individualized learning app. This app adjusts the questions you see depending on what words you know (and which ones you're struggling with)"
        title="German Spaced Repetition App"
        icons={icons} tech={sraTech} />
      <ProjectCard image={temp} desc="An online journal that stays updated wherever you go, on any device." title="Cloud Journal"
        icons={icons} tech={tech} />
    </section>
  );
}

export default Projects;