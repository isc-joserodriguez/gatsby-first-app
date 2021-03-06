/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title:'Gatsby Tutorial',
    description:'Some random description',
    author:'Jose Rodriguez',
    data:['item1', 'item2'],
    person:{name:'Peter',age:23}
  },
  plugins: [`gatsby-plugin-styled-components`]
}
