import React, { useState } from 'react';

import Layout from './components/Layout';
import Heading from './components/Heading';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import { sections } from './content';
import { CanvasDrawing } from './components/CanvasDrawing';
import { composition } from './components/CanvasDrawing/drawings';

const App = () => {
	const [streetLevel, setStreetLevel] = useState(0);

	return (
		<Layout data-testid="app">
			<CanvasDrawing draw={composition} drawVars={{ StreetLevel: streetLevel }}>
				<Heading />
				<About />
				<Portfolio title={sections.titles[1]} setSectionBoundary={setStreetLevel} />
				<Contact title={sections.titles[2]} />
			</CanvasDrawing>
		</Layout>
	);
};

export default App;
