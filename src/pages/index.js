import React from "react"
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';

export default () => (
  <div>
    <Navbar />
    Hello people!
    <div>
      <Link to="/blog">Blog page</Link>
    </div>
    <a href="https://www.gatsbyjs.com">Gatsby docs</a>
  </div>
)