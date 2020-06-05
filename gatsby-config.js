module.exports = {
  siteMetadata: {
    title: `Gatsby TypeScript Starter`,
    description: `Create your next, Gatsby TypeScript project with this starter. This starter comes with the main Gatsby and Typescript configuration files you might need.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`, // This plugin configures Gatsby to create a web app manifest file to make this app a pwa
      options: {
        name: `gatsby-typescript-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-ts-starter.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
