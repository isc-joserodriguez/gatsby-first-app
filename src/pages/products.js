import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import classes from '../components/products.module.css';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const Products = ({ data }) => {
    const { allContentfulProduct: { nodes: products } } = data;
    return (
        <Layout>
            <section className={classes.page}>
                {products.map(product => {
                    console.log(product)
                    return (
                        <article key={product.id}>
                            <Image fluid={product.image.fluid} alt={product.title} />
                            <h3>{product.title} <span>${product.price}</span></h3>
                            <Link to={`/products/${product.slug}`}>More details</Link>
                        </article>
                    )
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Products;