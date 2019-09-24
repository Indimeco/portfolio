import React from 'react';
import { Sect, SectHeading } from './Component.style';

const Section = ({ name, alternate, children }) => {
	return (
		<Sect id={name} alternate={alternate} data-test="section">
			<SectHeading>{name}</SectHeading>
			{children}
		</Sect>
	);
};

export default Section;
