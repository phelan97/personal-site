import React from 'react';
import {Link} from 'gatsby';

import './navbar.css';

function NavBar() {
  return (
    <nav role="nav">
      <ul>
        <li className="nav-projects"><Link to="#projects">Projects</Link></li>
        <li className="nav-skills"><Link to="#skills">Skills</Link></li>
        <li className="nav-about"><Link to="#about">About</Link></li>
        <li className="nav-contact"><Link to="#contact">Contact</Link></li>
        {/* <li><Link to="#">Resume</Link></li>
        <li><Link to="#">LI</Link></li>
        <li><Link to="#">GH</Link></li> */}
      </ul>
    </nav>
  )
}

export default NavBar;