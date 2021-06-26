import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import Heading from './components/Heading';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Sky from './components/Sky';
import { sections } from './content';
import { CanvasDrawing } from './components/CanvasDrawing';
import { composition, LandmarkDefinitions } from './components/CanvasDrawing/drawings';
import theme from './components/UI/themes';

const App: React.FC = () => {
	const [streetLevel, setStreetLevel] = useState(0);
	const [titleLevel, setTitleLevel] = useState(0);
	const [pageEnd, setPageEnd] = useState(0);

	return (
		<ThemeProvider theme={theme}>
			<Sky />
			<CanvasDrawing
				draw={composition}
				drawVars={{
					[LandmarkDefinitions.StreetLevel]: streetLevel,
					[LandmarkDefinitions.TitleLevel]: titleLevel,
					[LandmarkDefinitions.PageEnd]: pageEnd,
				}}
			/>
			<Layout data-testid="app" setPageEnd={setPageEnd}>
				<Heading setTitleLevel={setTitleLevel} />
				<About />
				<Portfolio title={sections.titles[1]} setSectionBoundary={setStreetLevel} />
				<Contact title={sections.titles[2]} />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
