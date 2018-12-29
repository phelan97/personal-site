import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Intro from '../components/intro';
import Skills from '../components/skills';
import About from '../components/about';
import Projects from '../components/projects';
import {Helmet} from 'react-helmet';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import hero from '../images/hero.jpg';
import home from '../images/home.png';
import background from '../images/background.jpg';
import './index.css';

const IndexPage = () => (
  <React.Fragment>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Portfolio - Sean Phelan</title>
    </Helmet>

    <Header />

    <main>
      <Intro />
      {/* <section class="about-section">
        <a class="anchor" id="about">&nbsp;</a>
        <h2>About</h2>
        <p></p>
      </section> */}
      <About />
      <Projects />
      <Skills />
      <section class="contact-section">
        <a class="anchor" id="contact">&nbsp;</a>
        <h2>Contact Me!</h2>
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
