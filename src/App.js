import React from 'react';

import Layout from './components/Layout';
import Heading from './components/Heading';
import Portfolio from './components/Portfolio';
import Section from './components/Section';
import Contact from './components/Contact';
import About from './components/About';
import { sections } from './content';

// TODO Radial glow on links? Backstage light kind of effect
// TODO Spellcheck & review content
const IndexPage = () => (
	<Layout>
		<Heading />
		<Section name={sections.links[0]} title={sections.titles[0]} alternate>
			<About />
		</Section>
		<Section name={sections.links[1]} title={sections.titles[1]}>
			<Portfolio />
		</Section>
		<Section name={sections.links[2]} title={sections.titles[2]} alternate>
			<Contact />
		</Section>
	</Layout>
);

export default IndexPage;
