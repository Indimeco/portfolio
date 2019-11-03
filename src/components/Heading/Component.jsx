import React from 'react';
import { HeaderWrapper, TitleWrapper, Title, Subtitle, HeaderImage } from './Component.style';
import { title, description } from '../../content';
import { useDyingLight, FadeOnScroll } from '../UI/utils';
// TODO animate entry of content

const SubtitleLight = ({ children }) => {
	const dyingLightProps = useDyingLight();

	return <Subtitle {...dyingLightProps}>{children}</Subtitle>;
};

export const Heading = () => {
	return (
		<HeaderWrapper data-testid="heading">
			<FadeOnScroll>
				<TitleWrapper>
					<Title>{title}</Title>
					<SubtitleLight>{description}</SubtitleLight>
				</TitleWrapper>
			</FadeOnScroll>
			<FadeOnScroll>
				<HeaderImage src="images/icon.png" alt="Jacob's Headshot" />
			</FadeOnScroll>
		</HeaderWrapper>
	);
};

export default Heading;
