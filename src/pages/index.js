import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Intro from '../components/intro';
import Skills from '../components/skills';
import {Helmet} from 'react-helmet';
import hero from '../images/hero.jpg';
import home from '../images/home.png';
import background from '../images/background.jpg';
import './index.css';

const IndexPage = () => (
  <React.Fragment>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Sean Phelan</title>
    </Helmet>

    <Header />

    <main>
      <Intro />
      <section class="about-section">
        <a class="anchor" id="about">&nbsp;</a>
        <h2>About</h2>
        <p></p>
      </section>
      <Skills />
      <section class="projects-section">
        <a class="anchor" id="projects">&nbsp;</a>
        <h2>Projects</h2>
      </section>
      <section class="contact-section">
        <a class="anchor" id="contact">&nbsp;</a>
        <h2>Contact Me!</h2>
      </section>
    </main>

    <Footer />
    
  </React.Fragment>
)

export default IndexPage
