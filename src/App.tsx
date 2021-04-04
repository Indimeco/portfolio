import React from 'react';

import Layout from './components/Layout';
import Heading from './components/Heading';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import { sections } from './content';
import { CanvasDrawing } from './components/CanvasDrawing';

const IndexPage = () => (
	<Layout data-testid="app">
		<CanvasDrawing>
			<Heading />
			<About />
			<Portfolio title={sections.titles[1]} />
			<Contact title={sections.titles[2]} />
		</CanvasDrawing>
	</Layout>
);

export default IndexPage;
