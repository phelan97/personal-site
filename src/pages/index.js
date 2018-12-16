import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import {Helmet} from 'react-helmet';
import hero from '../images/hero.jpg';
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
        <h2>About</h2>
      </section>
      <section id="skills">
        <h2>Skills</h2>
      </section>
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
