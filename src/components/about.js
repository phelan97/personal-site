import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import './about.css';

function About() {
  return (
    <StaticQuery query={siteAuthorQuery} variables={{id: process.env.AUTHOR_ID}}
      render={data => (
        <section className="about-section" id="about">
          <h2>About me</h2>
          {data.contentfulAuthorInfo.bio.bio.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
          ))}
        </section>
    )}/>
  )
}
//<p>I've always been interested in the magic behind the scenes that makes the complicated software that we rely on every day possible. I've been programming on and off since I was about 13, starting with Java. Unfortunately Javascript wasn't so hot back then, but I definitely learned a lot about programming!</p>
//p> My interest in web development is more recent, and it's been an incredible experience to watch ideas come to life and evolve through the development process. When I'm not creating software, I'm frequently found reading or getting into spirited debates. I also enjoy gaming, building things, and this strange place called "the great outdoors." </p>

const siteAuthorQuery = graphql`
{
  contentfulAuthorInfo(isDefaultAuthor: {eq: true}) {
    bio {
      bio
    }
  }
}
`

export default About;