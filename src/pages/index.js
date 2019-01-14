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

import './index.css';

const IndexPage = () => (
  <React.Fragment>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Portfolio - Sean Phelan</title>
      <meta name="description" content="Hi, I'm Sean! This is my portfolio site, which holds some of my latest web development projects." />
      <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans" rel="stylesheet" />
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>

    <Header />

    <main>
      <Intro />
      <Projects />
      <Skills />
      <About />
      <section className="contact-section" id="contact">
        <h2>Contact me!</h2>
        <div className="contact-links">
          <a href="mailto:seanphelan97@gmail.com" className="contact-link"><FaEnvelope size="50px"/></a>
          <a href="https://www.linkedin.com/in/sean-phelan97"><FaLinkedin size="50px" className="contact-icon"/></a>
          <a href="https://github.com/phelan97"><FaGithub size="50px" className="contact-icon" /></a>
        </div>
      </section>
    </main>

    <Footer />
    
  </React.Fragment>
)

export default IndexPage
