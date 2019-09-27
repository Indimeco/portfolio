import React from 'react';
import {
	HeaderWrapper,
	TitleWrapper,
	Title,
	Subtitle,
} from './Component.style';
import { title, description } from '../../content';
import { ImageWrapper, Figure } from '../UI/Images';
import { FadeLine } from '../UI/Decorative';

export const Heading = () => {
	return (
		<HeaderWrapper data-test="heading">
			<TitleWrapper>
				<Title>{title}</Title>
				<Subtitle>{description}</Subtitle>
			</TitleWrapper>
			<ImageWrapper>
				<Figure src="todo" alt="Jacob's Headshot" />
			</ImageWrapper>
			<FadeLine />
		</HeaderWrapper>
	);
};

export default Heading;
