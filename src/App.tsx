import React, { useState } from 'react';

import Layout from './components/Layout';
import Heading from './components/Heading';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import { sections } from './content';
import { CanvasDrawing } from './components/CanvasDrawing';
import { composition, LandmarkDefinitions } from './components/CanvasDrawing/drawings';

const App: React.FC = () => {
	const [streetLevel, setStreetLevel] = useState(0);
	const [titleLevel, setTitleLevel] = useState(0);

	return (
		<Layout data-testid="app">
			<CanvasDrawing
				draw={composition}
				drawVars={{
					[LandmarkDefinitions.StreetLevel]: streetLevel,
					[LandmarkDefinitions.TitleLevel]: titleLevel,
				}}
			>
				<Heading setTitleLevel={setTitleLevel} />
				<About />
				<Portfolio title={sections.titles[1]} setSectionBoundary={setStreetLevel} />
				<Contact title={sections.titles[2]} />
			</CanvasDrawing>
		</Layout>
	);
};

export default App;
