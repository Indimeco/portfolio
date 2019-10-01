import React from 'react';

import Layout from './components/Layout';
import Heading from './components/Heading';
import Portfolio from './components/Portfolio';
import Section from './components/Section';
import Social from './components/Social';
import About from './components/About';

import { title, description } from './content';

const IndexPage = () => (
	<Layout>
		<Heading title={title} description={description} />
		<Section name="About">
			<About />
		</Section>
		<Section name="Portfolio" alternate={true}>
			<Portfolio />
		</Section>
		<Section name="Contact">
			<Social />
		</Section>
	</Layout>
);

export default IndexPage;
