import React from 'react';
import {StaticQuery, graphql} from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './navbar.css';

function NavBar() {
  return (
    <StaticQuery query={navQuery} render={data => {
      return (
        <nav role="nav">
          <ul>
            {data.allContentfulNavigationEntry.edges.map((edge, index) => (
              <li key={index}><AnchorLink key={edge.node.id} href={edge.node.partialUrl} offset="58px">{edge.node.title}</AnchorLink></li>
            )).reverse()}
          </ul>
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