import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const blog = () => {
    return (
        <Layout>
            <h1>This is our blog page</h1>
            <Link to="/">Home Page</Link>
        </Layout>
    )
}

export default blog
