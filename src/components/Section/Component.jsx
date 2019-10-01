import React from 'react';
import { Sect, SectContent, SectHeading } from './Component.style';

const Section = ({ name, title, alternate, children }) => {
	return (
		<Sect id={name} alternate={alternate} data-test="section">
			<SectContent>
				{title && <SectHeading>{title}</SectHeading>}
				{children}
			</SectContent>
		</Sect>
	);
};

export default Section;
