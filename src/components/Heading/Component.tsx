import React from 'react';

import { heading } from '../../content';
import { useDyingLight, FadeOnScroll } from '../UI/utils';

import { HeaderWrapper, TitleWrapper, Title, Subtitle, HeaderImage } from './Component.style';

const { title, description, headshot } = heading;

const SubtitleLight: React.FunctionComponent = ({ children }) => {
	const dyingLightProps = useDyingLight();

	return <Subtitle {...dyingLightProps}>{children}</Subtitle>;
};

export const Heading: React.FunctionComponent = () => (
	<HeaderWrapper data-testid="heading">
		<FadeOnScroll>
			<TitleWrapper>
				<Title>{title}</Title>
				<SubtitleLight>{description}</SubtitleLight>
			</TitleWrapper>
		</FadeOnScroll>
		<FadeOnScroll>
			<HeaderImage src={headshot.src} alt={headshot.alt} />
		</FadeOnScroll>
	</HeaderWrapper>
);

export default Heading;
