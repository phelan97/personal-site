import React from 'react'
import {Link} from 'gatsby';
import SEO from '../components/seo'
import "./404.css";

const NotFoundPage = () => (
  <main>
    <header>
      <div className="page-not-found">
        <SEO title="404 | Page not found" />
        <h1>NOT FOUND</h1>
        <p>{"Oh no! Nothing was found at this URL!"}</p>
        <Link to="/" className="home">Home</Link>
      </div>
    </header>
  </main>
)

export default NotFoundPage
