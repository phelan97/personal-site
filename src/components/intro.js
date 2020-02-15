import React from 'react';
import {Link} from 'gatsby';
import {StaticQuery, graphql} from 'gatsby';
import {FaArrowDown} from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './intro.css';

function Intro() {
  return (
    <StaticQuery query={introBlockQuery} render={data => {
      return (
      <section className="intro-section">
        <a className="anchor" id="intro">&nbsp;</a>
        <div id="text-block">
          <h1>Sean Phelan</h1>
          <p>{data.contentfulSiteInfo.intro.intro}</p>
          <AnchorLink href="#projects" offset="58"><button><FaArrowDown size="25px" /></button></AnchorLink>
        </div>
      </section>
    )}}/>
  )
}

const introBlockQuery = graphql`
  query IntroBlockQuery {
    contentfulSiteInfo {
      intro {
        intro
      }
    }
  }
`

export default Intro;