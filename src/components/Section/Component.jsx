import React from 'react';
import { Sect, SectContent, SectHeading } from './Component.style';

const Section = ({ name, alternate, children }) => {
	return (
		<Sect id={name} alternate={alternate} data-test="section">
			<SectContent>
				<SectHeading>{name}</SectHeading>
				{children}
			</SectContent>
		</Sect>
	);
};

export default Section;
