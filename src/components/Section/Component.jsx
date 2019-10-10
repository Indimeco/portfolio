import React from 'react';
import { Sect, SectHeading } from './Component.style';

const Section = ({ name, title, alternate, children }) => {
	return (
		<Sect id={name} alternate={alternate} data-test="section">
			{title && <SectHeading>{title}</SectHeading>}
			{children}
		</Sect>
	);
};

export default Section;
