module.exports = {
  siteMetadata: {
    title: `Recipes`,
    description: `Good food`,
    author: `adrhumphreys`
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipes`,
        path: `${__dirname}/content/recipes/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Recipes`,
        short_name: `Recipes`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        // precachePages: [`/about-us/`, `/projects/*`],
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
