import React from 'react';
import {Link} from 'gatsby';
import {FaArrowDown} from 'react-icons/fa';
import './intro.css';

function Intro() {
  return (
    <section class="intro-section">
      <a class="anchor" id="intro">&nbsp;</a>
      {/* <h1>Portfolio - Sean Phelan</h1> */}
      <div id="text-block">
        <h1>Sean Phelan</h1>
        <p>I'm a web developer experienced with server side and front end programming. I love trying out new technologies, writing maintainable code, and working with clean design.</p>
        <Link to="#projects"><button><FaArrowDown size="25px" /></button></Link>
      </div>
    </section>
  )
}

export default Intro;
