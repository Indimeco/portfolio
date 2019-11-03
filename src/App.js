import React from 'react';

import Layout from './components/Layout';
import Heading from './components/Heading';
import Portfolio from './components/Portfolio';
import Section from './components/Section';
import Contact from './components/Contact';
import About from './components/About';

import { title, description } from './content';

// TODO orange color too orange, match with green?
// TODO space between views too much, use snapping? decrease view size?
// TODO Image cropping
// TODO Radial glow on links? Backstage light kind of effect
// TODO Spellcheck & review content
const IndexPage = () => (
	<Layout>
		<Heading title={title} description={description} />
		<Section name="About" alternate>
			<About />
		</Section>
		<Section title="Check out my projects" name="Portfolio">
			<Portfolio />
		</Section>
		<Section title="Find me online" name="Contact" alternate>
			<Contact />
		</Section>
	</Layout>
);

export default IndexPage;
