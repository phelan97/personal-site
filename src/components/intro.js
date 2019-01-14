import React from 'react';
import {Link} from 'gatsby';
import {FaArrowDown} from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './intro.css';

function Intro() {
  return (
    <section className="intro-section">
      <a className="anchor" id="intro">&nbsp;</a>
      <div id="text-block">
        <h1>Sean Phelan</h1>
        <p>I'm a web developer experienced with server side and front end programming. I love trying out new technologies, writing maintainable code, and working with clean design.</p>
        <AnchorLink href="#projects" offset="58"><button><FaArrowDown size="25px" /></button></AnchorLink>
      </div>
    </section>
  )
}

export default Intro;
