import React from 'react';
import {Link, StaticQuery, graphql} from 'gatsby'
import {slide as Menu} from 'react-burger-menu';
import './navbar.css';

const NavBar = () => {
  return (
    <StaticQuery query={navQuery} render={data => {
      return (
        <nav role="nav">
          <Menu right className="smooth-scroll-menu">
            {data.allContentfulNavigationEntry.edges.map(edge => (
              <Link to={`./${edge.node.partialUrl}`} key={edge.node.id} 
                    offset="58px">{edge.node.title}
              </Link>
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