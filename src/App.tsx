import React, { useEffect, useState } from 'react';
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

	useEffect(() => {
		import('./generated_js/wasm_buildings').then((module) => {
			console.log(module.greet());
		});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Sky />
			<CanvasDrawing
				draw={composition}
				drawVars={{
					/*
					 * street level is the same as page end because there is not enough content
					 * to render another drawing without compromising the building effect
					 */
					[LandmarkDefinitions.StreetLevel]: pageEnd,
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
