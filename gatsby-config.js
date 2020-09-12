/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    description: "Necip Onur Uzun - Software Engineer",
    locale: "en",
    title: "Necip Onur Uzun",
  },
  plugins: [
  {
    resolve: "@wkocjan/gatsby-theme-intro",
    options: {
      theme: "classic",
    },
  },
],
}
