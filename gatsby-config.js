module.exports = {
	pathPrefix: '/portfolio-2019',
	siteMetadata: {
		title: `Jacob Lawrence | Web Developer`,
		description: `Portfolio for a versatile and skilled developer`,
		author: `Indimeco`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
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
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Indimeco-portfolio`,
				short_name: `Indimeco`,
				start_url: `/`,
				display: `minimal-ui`,
				icon: `src/images/icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
