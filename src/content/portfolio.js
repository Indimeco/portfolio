// TODO decide if links are neeeded and where they should go
export const portfolio = [
	{
		name: 'Web UI Toolkit',
		image: 'images/icon.png',
		alt: '',
		href: 'https://github.com/Indimeco/my-little-charlotte',
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
					'The organization I was working for was rife with custom html/css solutions for every individual part of the website. Each time a new project was initiated a new frontend would have to be fabricated to meet design requirements. This led to innumerable inconsistent and defect prone ui from page to page.',
			},
			{
				type: 'blurb',
				value: 'Adoption is its own cost',
			},
			{
				type: 'paragraph',
				value: `In the beginning I struggled to understand why other developers weren't as keen to stop building custom ui as I thought they would be. Many of them simply wanted to keep doing what they had been doing. Many of them felt like a component library with its own API was just extra complexity. Many of them didn't even know the Web UI Toolkit existed. I realized then that so much of the success of software, even a development tool, is in client aquisition and client retention. I had to inform and upskill people; I had to prove to them that the AA compliant, responsive and flexible component library was worth learning and maintaining.`,
			},
			{
				type: 'blurb',
				value: 'Communication is an architectural tool',
			},
			{
				type: 'paragraph',
				value:
					"One of the biggest challenges of consolidating and developing a React component library to solve the quality and consistency issues was understanding how people would use such a tool. From UX to UI to the scrum teams, I needed to ensure there was a common language around our designs and builds otherwise information would be corrupted and confusion would take hold. I did an endless amount of collaboration to understand the organization's methods, needs and culture which would, in turn, allow me to define the API layers of the library.",
			},
		],
	},
	{
		name: 'My Little Charlotte',
		image: 'images/icon.png',
		alt: '',
		href: 'https://github.com/Indimeco/my-little-charlotte',
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
					'In the fall of 2018 the organization I was working for wanted to move massive amounts of content from one CMS to another. They had no technical solution for this and planned to test it all using a force of QAs and editors. This was unacceptable to me so I took it upon myself to prototype a tool on my personal github that would collect and analyze the data across our different CMS. The prototype was a success and I continued to develop My Little Charlotte within the company until it reached production quality and was feature complete.',
			},
			{
				type: 'blurb',
				value: 'Data driven solutions shape our industry',
			},
			{
				type: 'paragraph',
				value:
					'With the data collected from My Little Charlotte I was not only able to deliver confidence in the content migration accuracy, direct links to defects as well as time relevant test coverage dashboards, but also a suite of insightful metrics unrelated to the project. For instance, I was able to create reports on the frequency and locations of dead links across the website and reports on the occurance of certain sensitive word combinations.',
			},
		],
	},
	{
		name: 'QRPG',
		image: 'images/icon.png',
		alt: '',
		href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=902748466',
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
				type: 'blurb',

				value: 'Passion without constitution will stagnate',
			},
			{
				type: 'paragraph',
				value:
					'At its height, QRPG had over 13,000 followers on the Steam Workshop. The functionalities and combined utilities of QRPG were very sought after, but there were glaring issues with the netcode and rendering engine of Tabletop Simulator. Pair this last fact with the ever-flowing and inevitable breaking changes to the Tabletop Simulator Lua API and we have a huge maintenence cost. After distributing QRPG, the dev team, mostly because of the aforementioned struggles, wanted to move on. Since then I have only worked on critical bugfixes and documentation enhancements. Working with the unstable engine and legacy scripting code base is too laborious an obstacle to implement and maintain new features.',
			},
		],
	},
];
