import React from 'react';
import ProjectCard from './project-card';
import temp from '../images/background.jpg';

function Projects() {
  return (
    <section class="projects-section">
      <a class="anchor" id="projects">&nbsp;</a>
      <h2>Projects</h2>
      <ProjectCard projectImage={temp} />
      <ProjectCard projectImage={temp} />
    </section>
  );
}

export default Projects;