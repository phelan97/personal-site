import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
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
      <section id="intro">
        <h1>Portfolio - Sean Phelan</h1>
        <p>I'm a web developer experienced in server side and front end programming. I love trying out new technologies, writing maintainable code, and working with clean designs.</p>
      </section>
      <section id="about">
        <h2>About</h2>
        <p></p>
      </section>
      <Skills />
      <section id="projects">
        <h2>Projects</h2>
      </section>
      <section id="contact">
        <h2>Contact Me!</h2>
      </section>
    </main>
  </React.Fragment>
)

export default IndexPage
