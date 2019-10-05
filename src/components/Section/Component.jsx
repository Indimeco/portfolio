import React from 'react';
import { Sect, SectContent, SectHeading } from './Component.style';
import { View } from '../UI/Spacing';

const Section = ({ name, title, alternate, children }) => {
	return (
		<Sect id={name} alternate={alternate} data-test="section">
			<View>
				<SectContent>
					{title && <SectHeading>{title}</SectHeading>}
					{children}
				</SectContent>
			</View>
		</Sect>
	);
};

export default Section;
