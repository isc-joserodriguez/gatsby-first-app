/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'Some random description',
    author: 'Jose Rodriguez',
    data: ['item1', 'item2'],
    person: { name: 'Peter', age: 23 }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0dt39xkbznir`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `72unQssNcrAk2D1N9cPBEXxheBKJXhELK19AlPyVoB4`,
      },
    },
  ]
}
