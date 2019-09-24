import React from 'react';

import Layout from './components/Layout';
import Heading from './components/Heading';
import Portfolio from './components/Portfolio';
import Section from './components/Section';
import Social from './components/Social';
import { title, description } from './content';

const IndexPage = () => (
	<Layout>
		<Heading title={title} description={description} />
		<Section name="About">
			<p>
				Lorem ipsum dolor sit amet consectetur adipiscing elit pretium, cursus
				nunc nascetur suspendisse litora justo congue eget tincidunt, cum montes
				conubia ultrices nulla laoreet sollicitudin. Potenti ac rutrum sapien
				nunc ligula magna pellentesque ultrices dictum maecenas himenaeos
				faucibus lectus fusce integer, suspendisse eget laoreet vitae in at leo
				libero hac nascetur primis neque convallis bibendum. Cum euismod
				habitant curabitur nec justo varius mus velit mi sodales vulputate,
				torquent aliquet eget fusce massa erat malesuada quisque himenaeos nam
				quam, gravida vivamus dapibus aptent rutrum dignissim pulvinar taciti
				diam proin.
			</p>
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
