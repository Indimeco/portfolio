import React from 'react';
import { HeaderWrapper, Title, Subtitle } from './Component.style';

export const Heading = ({ title, description }) => {
	return (
		<HeaderWrapper data-test="heading">
			<Title>{title}</Title>
			<Subtitle>{description}</Subtitle>
		</HeaderWrapper>
	);
};

export default Heading;
