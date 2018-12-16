import React from 'react';
import {Link} from 'gatsby';
import NavBar from '../components/navbar';

import './header.css';

function Header() {
  return (
    <header className="header" role="banner">
      <div id="logo">
        <Link to="/">Placeholder</Link>
      </div>

      <NavBar />
    </header>
  )
}

export default Header;