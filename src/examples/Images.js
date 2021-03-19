import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from '../images/beach.jpeg';
import Image from 'gatsby-image';

const getImages = graphql`
{
    file(relativePath: {eq: "desert.jpeg"}) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          src
        }
      }
    }
    fluid: file(relativePath: {eq: "ocean.jpeg"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
  `;
const Images = () => {
    return <section className="images">
        <article className="single-image">
            <h3>basic image</h3>
        </article>
        <article className="single-image">
            <h3>fixed image/blur</h3>
        </article>
        <article className="single-image">
            <h3>fluid image/svg</h3>
        </article>
    </section>
}

export default Images
