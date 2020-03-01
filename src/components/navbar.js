import React from 'react';
import {StaticQuery, graphql} from 'gatsby'
import {slide as Menu} from 'react-burger-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './navbar.css';

function NavBar() {
  return (
    <StaticQuery query={navQuery} render={data => {
      return (
        <nav role="nav">
          <Menu>
            {data.allContentfulNavigationEntry.edges.map((edge, index) => (
              <AnchorLink key={edge.node.id} id={edge.node.title.toLowerCase()} className="menu-item"
                href={edge.node.partialUrl} offset="58px">{edge.node.title}</AnchorLink>
            )).reverse()}
          </Menu>
        </nav>
      )
    }}/>
  )
}

const navQuery = graphql`
  {
    allContentfulNavigationEntry {
      edges {
        node {
          id
          partialUrl
          title
        }
      }
    }
  }
`

export default NavBar;