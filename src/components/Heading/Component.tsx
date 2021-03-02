import React from 'react';
import styled from 'styled-components';

import { heading } from '../../content';
import { useDyingLight, FadeOnScroll, useCanvas } from '../UI/utils';

import { drawing } from './canvas';
import { HeaderWrapper, TitleWrapper, Title, Subtitle, HeaderImage } from './Component.style';

const { title, description, headshot } = heading;

const SubtitleLight: React.FunctionComponent = ({ children }) => {
	const dyingLightProps = useDyingLight();

	return <Subtitle {...dyingLightProps}>{children}</Subtitle>;
};

const BackgroundCanvas = styled.canvas`
	width: 100%;
	height: 100%;
	position: absolute;
`;

export const Heading: React.FunctionComponent = () => {
	const [canvasRef] = useCanvas(drawing, false);

	return (
		<>
			<BackgroundCanvas ref={canvasRef} />
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
		</>
	);
};

export default Heading;
