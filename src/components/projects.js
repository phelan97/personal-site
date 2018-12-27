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
  return (
    <section class="projects-section">
      <a class="anchor" id="projects">&nbsp;</a>
      <h2>Projects</h2>
      <ProjectCard image={temp} desc="project description" title="project 1"
        icons={icons} tech={tech}/>
      <ProjectCard image={temp} desc="project description" title="project 2"
        icons={icons} tech={tech} />
      <ProjectCard image={temp} desc="project description" title="project 2"
        icons={icons} tech={tech} />
    </section>
  );
}

export default Projects;