import React from 'react';
import './skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <a class="anchor" id="skills">&nbsp;</a>
      <h2>Skills</h2>
      <div className="skills-container">
        <div>
          <h3>Server side technologies</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Passport</li>
            <li>MongoDB/Mongoose</li>
            <li>PostgreSQL</li>
            <li>graphql-yoga</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <h3>Front end technologies</h3>
          <ul>
            <li>Javascript ES6</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>Redux and Redux Thunk</li>
            <li>Apollo Client</li>
          </ul>
            {/* <li>Vue</li>
            <li>Sass</li> */}
        </div>
        <div>
          <h3>Testing and Tooling</h3>
          <ul>
            <li>Mocha</li>
            <li>Chai</li>
            {/* <li>Jest</li>
            <li>Enzyme</li> */}
            <li>Travis CI</li>
            <li>Git/Github</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;