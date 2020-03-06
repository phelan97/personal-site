import React from 'react';
import Img from 'gatsby-image';
import {Link, StaticQuery, graphql} from 'gatsby';
import {FaArrowDown} from 'react-icons/fa';
import './intro.css';

function Intro() {
  return (
    <StaticQuery query={introBlockQuery} render={data => {
      return (
      <section className="intro">
        <Img fluid={data.contentfulSiteInfo.heroImage.fluid} className="hero-image" loading="eager"/>
        <a className="anchor" id="intro-link">&nbsp;</a>
        <div id="text-block">
          <h2>Sean Phelan</h2>
          <p>{data.contentfulSiteInfo.intro.intro}</p>
          <Link to="#projects" offset="58"><button>My Projects</button></Link>
          <Link to="/resume" offset="58"><button>Resume</button></Link>
        </div>
      </section>
    )}}/>
  )
}

const introBlockQuery = graphql`
{
  contentfulSiteInfo {
    intro {
      intro
    }
    heroImage {
      fluid(maxWidth: 3840) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
}
`

export default Intro;