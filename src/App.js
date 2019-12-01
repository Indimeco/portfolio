import React from 'react';

import Layout from './components/Layout';
import Heading from './components/Heading';
import Portfolio from './components/Portfolio';
import Section from './components/Section';
import Contact from './components/Contact';
import About from './components/About';
import { sections } from './content';

// REVIEW Web ui toolkit mock image for better thumbnail
// TODO Lazy load images
// TODO analytics tagging implementation
// TODO faster rotary animation (powerpointy)
// TODO font scaling text on links looks wierd
// TODO properly center header and headshot
const IndexPage = () => (
	<Layout>
		<Heading />
		<Section name={sections.links[0]} alternate>
			<About title={sections.titles[0]} />
		</Section>
		<Section name={sections.links[1]} title={sections.titles[1]}>
			<Portfolio title={sections.titles[1]} />
		</Section>
		<Section name={sections.links[2]} alternate>
			<Contact title={sections.titles[2]} />
		</Section>
	</Layout>
);

export default IndexPage;
