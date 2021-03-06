import React from 'react';
import Img from 'gatsby-image';
import {StaticQuery, graphql} from 'gatsby';
import {FaArrowDown} from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './intro.css';

function Intro() {
  return (
    <StaticQuery query={introBlockQuery} render={data => {
      return (
      <div className="intro">
        <Img fluid={data.contentfulSiteInfo.heroImage.fluid} className="hero-image" loading="eager"/>
        <a className="anchor" id="intro-link">&nbsp;</a>
        <div id="text-block">
          <h2>Sean Phelan</h2>
          <p>{data.contentfulSiteInfo.intro.intro}</p>
          <AnchorLink href="#projects" offset="58"><button><FaArrowDown size="25px" /></button></AnchorLink>
        </div>
      </div>
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