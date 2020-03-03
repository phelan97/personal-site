import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import './about.css';

const AboutSection = () => {
  return (
    <StaticQuery query={siteAuthorQuery} variables={{id: process.env.AUTHOR_ID}}
      render={data => (
        <section className="about-section" id="about">
          <h2>About me</h2>
          {data.contentfulAuthorInfo.bio.bio.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
          ))}
        </section>
    )}/>
  )
}

const siteAuthorQuery = graphql`
{
  contentfulAuthorInfo(isDefaultAuthor: {eq: true}) {
    bio {
      bio
    }
  }
}
`

export default AboutSection;