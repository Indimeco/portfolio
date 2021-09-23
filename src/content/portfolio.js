import investorSurvey from './images/investor-survey.png';
import charlotte from './images/my-little-charlotte.jpg';
import portfolio2018 from './images/2018-portfolio.png';
import qrpg from './images/QRPG_Logo.png';
import comingSoon from './images/coming-soon-message.jpg';
import tyro from './images/tryo.jpg';
import chameleonNew from './images/ChameleonNew.PNG';
import triona from './images/triona.png';

export const portfolio = [
	{
		name: 'Lightspeed Inventory Microfrontends',
		image: comingSoon,
		alt: 'coming soon',
		description:
			'I composed three separate applications into one experience using webpack federated modules.',
		content: [
			{
				type: 'paragraph',
				value:
					'Each microfrontend was a react applications, written in typescript, with graphql backends grounded in aws appsync.',
			},
			{
				type: 'blurb',
				value: 'All microservices must be truly independent',
			},
			{
				type: 'paragraph',
				value:
					'Having each application continue to work in a standalone mode was of vital importance to me. Even though these applications would live together in the same space, they needed to be truly independent and autonomous. This allowed us to independent test automation and deployment patterns for each frontend.',
			},
		],
	},
	{
		name: 'Tyro Pay@Table',
		image: tyro,
		alt: 'Tyro terminal',
		description:
			'Tyro Pay@Table is an API in php for Kounta by Lightspeed which allows customers to pay for their meals without waiting at the counter.',
		content: [
			{
				type: 'blurb',
				value: 'The human need',
			},
			{
				type: 'paragraph',
				value:
					'One of my main reasons for joining Kounta was to create real value for other people. Pay@Table is something that improves peoples dining experiences and business operations, just a little.',
			},
			{
				type: 'blurb',
				value: 'A programming language is just a tool',
			},
			{
				type: 'paragraph',
				value:
					'Pay@Table was my first PHP project; not everyone can say their first foray into a new programming language was handling money over an API. There are certainly some dragons inside PHP, but Pay@Table was still successful because of the practices and techniques I brought from other programming languages: a plethora of unit tests, pure functions and clean interfaces.',
			},
		],
	},
	{
		name: 'Chameleon Design System',
		image: chameleonNew,
		alt: 'Chameleon Design System',
		description: 'Chameleon is the React component library used across Kounta products.',
		content: [
			{
				type: 'paragraph',
				value:
					"I accidentally inherited Chameleon when I joined Kounta. Transitioning from having built my own design system at the bank now to maintaining somebody else's system was a huge undertaking.",
			},
			{
				type: 'blurb',
				value: 'Interfaces are the only sacred space',
			},
			{
				type: 'paragraph',
				value: `I rewrote the design system in typescript, brought in true themeing capability, combined all divergent maintained versions of the design system into a single version, built an automatic versioning and release pipeline. All this, and I never broke an interface. The interface of a design system is the contractual agreement in each component prop and callback. Without sacred interfaces there can be no progress.`,
			},
		],
	},
	{
		name: 'Triona Bot',
		image: triona,
		alt: 'Triona',
		description: 'Triona is a bot for the chat application Discord, written in typescript and terraform.',
		content: [
			{
				type: 'blurb',
				value: 'There is no better way to learn than to try',
			},
			{
				type: 'paragraph',
				value:
					'Triona was the first piece software I really did everything myself. From SSHing into ec2 to install updates, to digging through system logs, to introducing junior developers to terraform, to hunting for APIs to consume across the web, to writing the unit tests, to configuring the transpilation system before upload.',
			},
			{
				type: 'paragraph',
				value: 'I highly encourage every developer to try something fully scoped like this at least once.',
			},
		],
	},
	{
		name: 'Web UI Toolkit',
		image: investorSurvey,
		alt: 'Web UI Toolkit',
		description:
			'The Web UI Toolkit is a React component library designed to help development teams deliver quality and consistency at velocity.',
		content: [
			{
				type: 'blurb',
				value: 'Divergent patterns breed defects',
			},
			{
				type: 'paragraph',
				value:
					'MLC had custom html/css solutions for every individual part of their website. Each time a new project was initiated a new frontend would be built from the ground up, or layer precariously on top of what was existing. This led to innumerable inconsistent and defect prone pages. The Web UI Toolkit was a great tool for creating better experiences by being a consolidated library.',
			},
			{
				type: 'blurb',
				value: 'The cost of adoption',
			},
			{
				type: 'paragraph',
				value: `In the beginning I struggled to understand why other developers weren't as keen to stop building custom ui as I thought they would be. Many of them simply wanted to keep doing what they had been doing. Many of them felt like a component library with its own API was just extra complexity. Some of them didn't even know the Web UI Toolkit existed. I realized then that so much of the success of software, even a development tool, is in investing in people. I had to inform and up-skill people; I had to prove to them that the AA compliant, responsive and flexible component library was worth learning and maintaining.`,
			},
			{
				type: 'blurb',
				value: 'Communication is an architectural tool',
			},
			{
				type: 'paragraph',
				value:
					"One of the biggest challenges of consolidating and developing a React component library to solve the quality and consistency issues was understanding how people would use such a tool. From UX to UI to the scrum teams, I needed to ensure there was a common language around both our designs and our code, otherwise information would be corrupted and confusion would take hold. It took careful listening to understand the organization's methods, needs and culture which would, in turn, allow me to define the API layers of the library.",
			},
		],
	},
	{
		name: 'My Little Charlotte',
		image: charlotte,
		alt: 'My Little Charlotte terminal preview',
		description:
			'My Little Charlotte is a data scraping and data analysis tool, built using Puppeteer and Node JS.',
		content: [
			{
				type: 'blurb',
				value: 'Automation is worth the effort',
			},
			{
				type: 'paragraph',
				value:
					'In the fall of 2018 MLC wanted to move massive amounts of content from one CMS to another. They had no technical solution for this and planned to test it all using a force of QAs and content editors. I took it upon myself to prototype a tool on my personal github that would collect and analyze the data between our different CMS. The prototype was a success and I continued to develop My Little Charlotte within the company. It was used on a daily basis during the migration project to produce reports and migration accuracy tests.',
			},
			{
				type: 'link',
				value: {
					href: 'https://github.com/Indimeco/my-little-charlotte',
					text: 'Check out the POC source code',
				},
			},
			{
				type: 'blurb',
				value: 'Data driven solutions shape our industry',
			},
			{
				type: 'paragraph',
				value:
					'With the data collected from My Little Charlotte I was not only able to deliver confidence in the content migration accuracy, direct links to defects as well as time relevant test coverage dashboards, but also a suite of insightful metrics unrelated to the project. For many months following the project I would create reports on the frequency and locations of dead links across the website as well as reports on the occurrence of certain sensitive word combinations.',
			},
		],
	},
	{
		name: 'My Portfolio (2018)',
		image: portfolio2018,
		alt: 'Old 2018 portfolio preview',
		description:
			'After I taught myself Front End development I constructed a portfolio which showcased some of my preliminary work.',
		content: [
			{
				type: 'blurb',
				value: 'The most valuable skill is the aptitude to learn',
			},
			{
				type: 'paragraph',
				value: `There are so many unknowns and half-truths which glimmer only dimly; I believe a good developer is a person who can find the lights in the darkness. Many of the techniques and solutions I employed in the construction of the 2018 portfolio I now know to be dangerous or primitive, but it took trialing them to gain that depth of technological and strategic understanding.`,
			},
			{
				type: 'blurb',

				value: 'Technology stops for no one',
			},
			{
				type: 'paragraph',
				value:
					'In the field of web development it is necessary to be able to adapt to extreme circumstances. Between monitoring browser capabilities, evolving with third party vendors and maintaining technical excellence there is little allowance for idleness. My 2018 portfolio looks to me now like a dusty relic of an age long passed. Going forward, we must ensure we are building sustainable software and not focusing on the shining edge of new technology. Afterall, they say no one can stay on the edge forever.',
			},
			{
				type: 'link',
				value: {
					href: 'https://github.com/Indimeco/portfolio-2018',
					text: 'View the 2018 portfolio source code',
				},
			},
		],
	},
	{
		name: 'QRPG',
		image: qrpg,
		alt: 'Quality RPG logo',
		description:
			'QRPG is a Steam Workshop mod that provides UI and Data Management solutions for playing Role Playing Games within the physics sandbox Tabletop Simulator.',
		content: [
			{
				type: 'blurb',
				value: 'Open source and collaboration are the heart of development',
			},
			{
				type: 'paragraph',
				value:
					'QRPG was my first taste of working with other developers to create a product. It was a product we were all passionate about and wanted and share with the community. Despite our inexperience and the limitations of our environment this was a wonderful experience.',
			},
			{
				type: 'link',
				value: {
					href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=902748466',
					text: 'Check out the project on the Steam Workshop',
				},
			},
			{
				type: 'blurb',

				value: 'A healthy module needs a healthy system',
			},
			{
				type: 'paragraph',
				value:
					'At its height, QRPG had over 13,000 followers on the Steam Workshop. The functionalities and combined utilities of QRPG were very sought after, but there were glaring issues with the Tabletop Simulator netcode and rendering engine; strange bugs our mod could not solve for. The Tabletop Simulator Lua API was not versioned and that breaking changes were continuously made over the years. These things took a huge toll on mod developers in the form of maintenance cost. After distributing QRPG, the QRPG team moved on. Since then I have only worked on critical bugfixes and documentation enhancements. Working with the unstable engine and legacy scripting code base is too laborious an obstacle to implement and maintain new features.',
			},
		],
	},
];

export const portfolioId = 'portfolio';
