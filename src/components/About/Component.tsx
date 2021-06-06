import React from 'react';

import { aboutId } from '../../content/about';

import Rotary from './Rotary';
import Log from './Log';
import { AboutWrapper } from './Component.style';

export const About: React.FunctionComponent = () => (
	<AboutWrapper data-testid="about" id={aboutId}>
		<Rotary />
		<Log />
	</AboutWrapper>
);

export default About;
