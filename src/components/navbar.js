import React from 'react';
import {StaticQuery, graphql} from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './navbar.css';

// TODO: support ordering of elements... ordering is currently unspecified
function NavBar() {
  return (
    <StaticQuery query={navQuery} render={data => {
      return (
        <nav role="nav">
          <ul>
            {data.allContentfulNavigationEntry.edges.map((edge, index) => (
              <li key={index}><AnchorLink key={edge.node.id} href={edge.node.partialUrl} offset="58px">{edge.node.title}</AnchorLink></li>
            ))}
          </ul>
        </nav>
      )
    }}/>
    
    // <li className="nav-projects"><AnchorLink href="#projects" offset="58px">Projects</AnchorLink></li>
    // <li className="nav-skills"><AnchorLink href="#skills" offset="58px">Skills</AnchorLink></li>
    // <li className="nav-about"><AnchorLink href="#about" offset="58px">About</AnchorLink></li>
    // <li className="nav-contact"><AnchorLink href="#contact" offset="58px">Contact</AnchorLink></li>
    // {/* <li><Link to="#">Resume</Link></li>
    // <li><Link to="#">LI</Link></li>
    // <li><Link to="#">GH</Link></li> */}
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