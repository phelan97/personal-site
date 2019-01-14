import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './navbar.css';

function NavBar() {
  return (
    <nav role="nav">
      <ul>
        <li className="nav-projects"><AnchorLink href="#projects" offset="58px">Projects</AnchorLink></li>
        <li className="nav-skills"><AnchorLink href="#skills" offset="58px">Skills</AnchorLink></li>
        <li className="nav-about"><AnchorLink href="#about" offset="58px">About</AnchorLink></li>
        <li className="nav-contact"><AnchorLink href="#contact" offset="58px">Contact</AnchorLink></li>
        {/* <li><Link to="#">Resume</Link></li>
        <li><Link to="#">LI</Link></li>
        <li><Link to="#">GH</Link></li> */}
      </ul>
    </nav>
  )
}

export default NavBar;