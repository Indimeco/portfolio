const {
	faGithub,
	faSteam,
	faLinkedinIn,
} = require('@fortawesome/free-brands-svg-icons');

module.exports = {
	sections: ['About', 'Portfolio', 'Contact'],
	title: 'Jacob Lawrence',
	description: 'Web Developer',
	github: 'https://github.com/Indimeco/portfolio-2019',
	social: [
		{ href: 'https://www.linkedin.com/in/indimeco/', icon: faLinkedinIn },
		{
			href: 'http://steamcommunity.com/id/PancakeEngineering/myworkshopfiles/',
			icon: faSteam,
		},
		{ href: 'https://github.com/Indimeco', icon: faGithub },
	],
};
