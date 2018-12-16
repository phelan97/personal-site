import React from 'react';
import {Link} from 'gatsby';

import './navbar.css';

function NavBar() {
  return (
    <nav role="nav">
      <ul className="nav">
        <li><Link to="#intro">About</Link></li>
        <li><Link to="#skills">Skills</Link></li>
        <li><Link to="#projects">Projects</Link></li>
        <li><Link to="#contact">Contact</Link></li>
        {/* <li><Link to="#">Resume</Link></li>
        <li><Link to="#">LI</Link></li>
        <li><Link to="#">GH</Link></li> */}
      </ul>
    </nav>
  )
}

export default NavBar;