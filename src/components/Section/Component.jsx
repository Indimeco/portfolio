import React from 'react';

import { Sect } from './Component.style';

const Section = ({ name, alternate, children }) => {
	return (
		<Sect id={name} alternate={alternate} data-testid="section">
			{children}
		</Sect>
	);
};

export default Section;
