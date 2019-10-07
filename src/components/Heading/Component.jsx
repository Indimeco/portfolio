import React from 'react';
import {
	HeaderWrapper,
	TitleWrapper,
	Title,
	Subtitle,
	HeaderImage,
} from './Component.style';
import { title, description } from '../../content';

export const Heading = () => {
	return (
		<HeaderWrapper data-test="heading">
			<TitleWrapper>
				<Title>{title}</Title>
				<Subtitle>{description}</Subtitle>
			</TitleWrapper>
			<HeaderImage src="images/icon.png" alt="Jacob's Headshot" />
		</HeaderWrapper>
	);
};

export default Heading;
