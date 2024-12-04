import React from 'react';

import { aboutId } from '../../content/about';

import Log from './Log';
import { AboutWrapper } from './Component.style';

export const About: React.FunctionComponent = () => (
	<AboutWrapper data-testid="about" id={aboutId}>
		<Log />
	</AboutWrapper>
);

export default About;
