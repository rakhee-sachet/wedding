module.exports = {
  siteMetadata: {
		title: `Rakhee & Sachet – Nov 06th, 2019 – Manhattan, NY`,
		author: `Rakhee & Sachet`,
		description: `Wedding Website`,
	},
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/background.jpg' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-styled-components',
    {
			resolve: `gatsby-plugin-material-ui`,
    },
    {
			resolve: `gatsby-plugin-google-fonts`,
			options: {
			  fonts: [
				`material icons`,
			  ],
			}
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-89643782-2',
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-remark-responsive-iframe`],
    //   },
    // },  
  ],
}
