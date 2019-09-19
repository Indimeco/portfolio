import React from 'react';
import { HeaderWrapper, Title, Subtitle } from './Component.style';
import { title, description } from '../../content';

export const Heading = () => {
	return (
		<HeaderWrapper data-test="heading">
			<Title>{title}</Title>
			<Subtitle>{description}</Subtitle>
		</HeaderWrapper>
	);
};

export default Heading;
