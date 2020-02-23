import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Intro from '../components/intro';
import Skills from '../components/skills';
import About from '../components/about';
import Projects from '../components/projects';
import {Helmet} from 'react-helmet';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import favicon from '../images/favicon.ico';
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
import './index.css';

const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Lato:400,700');
* {
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Lato', sans-serif;
  font-weight: 900;
}
h2 {
  font-size: 1.45em;
}
section, p {
  padding: 10px;
}
`;

const IndexPage = () => (
  <React.Fragment>

    <GlobalStyle />

    <Helmet>
      <meta charSet="utf-8" />
      <title>Portfolio - Sean Phelan</title>
      <meta name="description" content="Hi, I'm Sean! This is my portfolio site, which holds some of my latest web development projects." />
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>

    <Header />

    <main>
      <Intro />
      <div class="content-container">
        <Projects />
        <Skills />
      </div>
      <About />
      <section className="contact-section" id="contact">
        <h2>Contact me!</h2>
        <div className="contact-links">
          <a href="mailto:seanphelan97@gmail.com"><FaEnvelope size="50px" className="contact-icon"/></a>
          <a href="https://www.linkedin.com/in/sean-phelan97"><FaLinkedin size="50px" className="contact-icon"/></a>
          <a href="https://github.com/phelan97"><FaGithub size="50px" className="contact-icon" /></a>
        </div>
      </section>
    </main>

    <Footer />
    
  </React.Fragment>
)

export default IndexPage
