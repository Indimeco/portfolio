import investorSurvey from './images/investor-survey.png';
import charlotte from './images/my-little-charlotte.jpg';
import qrpg from './images/QRPG_Logo.png';
import inventoryHome from './images/inventory-home.jpg';
import tyro from './images/tryo.jpg';
import chameleonNew from './images/ChameleonNew.PNG';
import triona from './images/triona.png';
import epmCustom from './images/epm-customize.png';
import pulse from './images/pulse_marketing.png';

export const portfolio = [
	{
		name: 'Pulse',
		image: pulse,
		alt: 'Pulse mobile appstore preview',
		description: 'I lead development of the cross-platform mobile reporting application Lightspeed Pulse.',
		content: [
			{
				type: 'paragraph',
				value: 'Pulse is a React Native application with a backend written in Golang.',
			},
			{
				type: 'blurb',
				value: 'Server-side Javascript is expensive',
			},
			{
				type: 'paragraph',
				value:
					'Over the years at Lightspeed I built many services in Typescript. In most cases, we chose Typescript not because it was the best tool for the job, but because it was familiar to our development team. After years of upgrading dependencies, migrating node versions and hotfixing production type errors, I decided that we needed to change.',
			},
			{
				type: 'paragraph',
				value:
					'I selected Go as the best language for the simple job of running our backend HTTP server, despite the fact that nobody on the team had used Go in production before. The effect of this decision was that I spent an extraordinary amount of my free time reading books, blogs, studying flash cards and building mini-projects in Go.',
			},
			{
				type: 'paragraph',
				value:
					'In the end, we created a service with about two dozen dependencies, compared to our typescript services which had almost two thousand; we made a service which only ever encountered a handful of panics, a service that we never had to upgrade or migrate, a service that had fantastic logging and a service that never struggled with basic performance.',
			},
			{
				type: 'blurb',
				value: 'Shift complexity to move fast',
			},
			{
				type: 'paragraph',
				value:
					'Often in my career I have pushed back against complexity because it places constraints on what we can build in the future. In the case of Pulse, we had a unique sensitivity in that we wanted to be able to hotfix production issues as fast as possible, but Appstore and Playstore deployment processes sometimes could take up to a week and there was no guarantee users would update to newly released versions anyway.',
			},
			{
				type: 'paragraph',
				value:
					'We still took on complexity, but we pushed hard to lift it away from the frontend app and up to the backend server. Our API design could be viewed as untraditional in that it provided fine-tailored information for frontend views, avoiding as much transformation, aggregation and calculation on the frontend as possible, but it enabled us to have a sub-six minute hotfix time for any production issues across all released app versions.',
			},
		],
	},
	{
		name: 'External Platform Migration',
		image: epmCustom,
		alt: 'External Platform Migration home preview',
		description:
			'I lead development of the External Platform Migration project for Lightspeed K-Series, building a robust data migration pipeline from one Lightspeed platform to another.',
		content: [
			{
				type: 'paragraph',
				value:
					'With NextJS at its heart, External Platform Migration utilized an innovative software architecture to connect to various Lightspeed platforms, pull tens of thousands of items, tax rules, user permissions, POS configurations, menus, floorplans and printer settings, then transform them to a format compatible with K-Series, and finally upload them in a ready-to-trade state, all in a matter of minutes.',
			},
			{
				type: 'blurb',
				value: 'Not all architecture is infrastructure',
			},
			{
				type: 'paragraph',
				value:
					"The most interesting part about the system was its ability to handle different platform's APIs and data aggregration/transformation needs. In the beginning, we explored many options to achieve this involving portable SDKs or embedded services inside each platform-- in the end, all of our architecture was conceptual. This was a great lesson that sometimes the best result is achievable without reaching for new tools or innovative solutions and that there is a great deal of power in how we organize our code.",
			},
			{
				type: 'blurb',
				value: 'Technical management must live in the code',
			},
			{
				type: 'paragraph',
				value:
					'For about a year, I took on the role of Development Team Lead which moved many of my daily responsibilities into people management, although I was still the technical lead on the project. I found that the emphasis on people management was not conducive to ensuring the best technical quality and decisions on the project and did not allow me to make as many novel or foundational contributions to ease and guide the way.',
			},
			{
				type: 'paragraph',
				value:
					'My team was incredible and managing them was a breeze, but my talents and interest lie in the work itself; I believe the best way to help developers improve is from the shared effort and ideas exchanged in the undertaking of building software.',
			},
		],
	},
	{
		name: 'Advanced Inventory',
		image: inventoryHome,
		alt: 'Inventory home screen preview',
		description:
			'I lead development of the Advanced Inventory module for Lightspeed K-Series, building seven microservices and four microfrontends. This product gave customers a comprehensive suite of controls for purchasing, producing, managing and reporting on restaurant inventory.',
		content: [
			{
				type: 'paragraph',
				value:
					'Each microfrontend was a react application, written in typescript, with graphql backends grounded in AWS appsync and hosted on lambda. We built a host of other libraries and tools to surround this ecosystem.',
			},
			{
				type: 'blurb',
				value: 'All microservices must be independent',
			},
			{
				type: 'paragraph',
				value:
					'We had great success developing and deploying a microarchitectures at scale, but what enabled this success was a constant drive to separate concerns and communicate between services by contract. All our microservices communicated by independent APIs. Even our microfrontends communicated through strict interfaces where dependencies were injected by the host container. A large part of my early work was in fine-tuning the ways these entities were able to communicate.',
			},
			{
				type: 'blurb',
				value: 'Trust',
			},
			{
				type: 'paragraph',
				value:
					"Before Inventory, I wanted to do everything on my own; in Inventory, I couldn't-- there was simply too much software for one person to control. When I took up the technical lead for the squad I had to learn to trust in the unique capabilities of my squadmates. Over the years, I was humbled by other developers with niche and valuable specialities. After Inventory, I continued to put trust and responsibility in others and we grew to achieve even greater successes.",
			},
		],
	},
	{
		name: 'Tyro Pay@Table',
		image: tyro,
		alt: 'Tyro terminal',
		description:
			'Tyro Pay@Table was a payment API for Kounta by Lightspeed which allows customers to pay for their meals without waiting at the counter.',
		content: [
			{
				type: 'blurb',
				value: 'The human need',
			},
			{
				type: 'paragraph',
				value:
					"One of my main reasons for joining Kounta was to create real value for other people. Pay@Table is something that improves people's dining experiences and business operations, just a little.",
			},
			{
				type: 'blurb',
				value: 'A programming language is just a tool',
			},
			{
				type: 'paragraph',
				value:
					"Pay@Table was my first PHP project; it's amusing that my first foray into this new programming language was handling money over an API. There are certainly some dragons in PHP, but Pay@Table was still successful because of the practices and techniques I brought from other programming languages: a plethora of unit tests, pure functions and clean interfaces.",
			},
		],
	},
	{
		name: 'Chameleon Design System',
		image: chameleonNew,
		alt: 'Chameleon Design System',
		description: 'Chameleon is the React design sysetm used across Kounta by Lightspeed products.',
		content: [
			{
				type: 'paragraph',
				value:
					"I accidentally inherited Chameleon when I joined Kounta. Having built my own design system at the bank, I was suddenly the best person to take on the project when the previous maintainer left. Taking over somebody else's project was a world of difference from building my own, however.",
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
		description:
			'Triona was a chat bot for the messaging application Discord, written in typescript and terraform.',
		content: [
			{
				type: 'blurb',
				value: 'Building expertise requires experience',
			},
			{
				type: 'paragraph',
				value:
					'Triona was one of the first pieces of fullstack software where I did everything myself from SSHing into ec2 to install updates, to digging through system logs, to introducing junior developers to terraform, to hunting for APIs to consume across the web, to writing unit tests, to configuring transpilation and build systems before upload.',
			},
			{
				type: 'paragraph',
				value:
					'I highly encourage every developer to try something fully scoped like this at least once. I love reading books and learning about new technologies, but study or observation is never a replacement for practice.',
			},
		],
	},
	{
		name: 'Web UI Toolkit',
		image: investorSurvey,
		alt: 'Web UI Toolkit',
		description:
			'The Web UI Toolkit was a React design system designed to help development teams at MLC, then a part of NAB, deliver quality and consistency at velocity.',
		content: [
			{
				type: 'blurb',
				value: 'Divergent patterns breed defects',
			},
			{
				type: 'paragraph',
				value:
					'MLC had custom html/css solutions for every individual part of their website. Each time a new project was initiated a new frontend would be built from the ground up, or be layered precariously on top of thousands of existing styles. This led to innumerable inconsistent and defect-prone pages. The Web UI Toolkit was a great tool for creating unified, high quality experiences with a consolidated component library.',
			},
			{
				type: 'blurb',
				value: 'The cost of adoption',
			},
			{
				type: 'paragraph',
				value: `In the beginning I struggled to understand why other developers weren't as keen to stop building custom UI as I was; many developers felt like a component library with its own interfaces was just extra complexity-- some of them didn't even know the Web UI Toolkit existed. I realized then that so much of the success of software, even a development tool, is in investing in people and communication. I had to inform and upskill developers and scrum masters; I had to prove to them that it was worth adopting this system and to show them how easy it could be to be AA compliant, responsive and flexible.`,
			},
			{
				type: 'blurb',
				value: 'Communication is an architectural tool',
			},
			{
				type: 'paragraph',
				value:
					"One of the biggest challenges of using a React component library to solve the quality and consistency issues was understanding how people would use such a tool. From UX to UI to the developers, I needed to ensure there was a common thread of language through both designs and code, otherwise confusion would take hold and nobody would be happy. It took careful listening to understand the organization's methods, needs and culture which, in turn, allowed me to build a common language into the design system.",
			},
		],
	},
	{
		name: 'My Little Charlotte',
		image: charlotte,
		alt: 'My Little Charlotte terminal preview',
		description:
			'My Little Charlotte was a data scraping and data analysis tool, built using Puppeteer and Node JS.',
		content: [
			{
				type: 'blurb',
				value: 'Automation is worth the effort',
			},
			{
				type: 'paragraph',
				value:
					'In the fall of 2018 MLC wanted to move massive amounts of content from one CMS to another. They had no technical solution for this: the plan was to have interns copy/paste content over several months and then to test it all using a force of QAs and content editors. I took it upon myself to prototype a tool on my personal github that would collect and analyze the data between our different CMS by scraping the rendered web pages. The prototype was a success and I continued to develop My Little Charlotte within the company. It was used on a daily basis during the migration project to produce reports on migration accuracy, identify issues and streamline processes. With this tool the workflow was transformed into an interative feedback loop where even stray semi-colons and whitespace were tidied up.',
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
					'With the data collected from My Little Charlotte I was not only able to deliver confidence in the content migration accuracy, direct links to defects as well as time relevant test coverage dashboards, but also a suite of insightful metrics unrelated to the project. For many months following the project I would create reports on the frequency and locations of dead links across the website as well as reports on the occurrence of certain sensitive or legally problematic word combinations.',
			},
		],
	},
	{
		name: 'QRPG',
		image: qrpg,
		alt: 'Quality RPG logo',
		description:
			'QRPG was a Steam Workshop mod that provides UI and Data Management solutions for playing Role Playing Games within the physics sandbox Tabletop Simulator.',
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
					'At its height, QRPG had over 13,000 followers on the Steam Workshop. The functionalities and combined utilities of QRPG were very sought after, but there were glaring issues with the Tabletop Simulator netcode and rendering engine; strange bugs our mod could not solve for. The Tabletop Simulator Lua API was not versioned and that breaking changes were continuously made over the years. These issues combined took a toll on mod developers in the form of maintenance cost. A while after the celebrated launch of QRPG the team had to move on. Over the next several years I only deployed a few critical bugfixes and documentation enhancements; working with the unstable engine and legacy scripting code base was too laborious an obstacle to implement and maintain new features on such a large project.',
			},
		],
	},
];

export const portfolioId = 'portfolio';
