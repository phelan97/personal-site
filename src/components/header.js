import React from 'react';
import {Link} from 'gatsby';
import home from '../images/home.svg';
import NavBar from '../components/navbar';

import './header.css';

function Header() {
  return (
    <header className="header" role="banner">
      <div id="logo">
        <Link to="/"><img src={home} /></Link>
      </div>

      <NavBar />
    </header>
  )
}

export default Header;