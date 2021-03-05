import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import classes from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={classes.page}>

                <h1>This is our blog page</h1>

                <p className={classes.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto est quidem enim excepturi inventore beatae assumenda ut magni aliquid voluptatibus laudantium sunt totam natus, quibusdam esse error perspiciatis, ipsa recusandae.
            </p>
            </div>
        </Layout>
    )
}

export default blog
