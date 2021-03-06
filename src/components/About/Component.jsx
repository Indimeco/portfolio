import React from 'react';

import Rotary from './Rotary';
import Log from './Log';
import { AboutWrapper } from './Component.style';

export const About = () => {
	return (
		<AboutWrapper data-testid="about">
			<Rotary />
			<Log />
		</AboutWrapper>
	);
};

export default About;
