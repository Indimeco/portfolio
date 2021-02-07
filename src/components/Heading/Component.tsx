import React from 'react';

import { heading } from '../../content';
import { useDyingLight, FadeOnScroll, useCanvas } from '../UI/utils';

import { HeaderWrapper, TitleWrapper, Title, Subtitle, HeaderImage } from './Component.style';

const { title, description, headshot } = heading;

const SubtitleLight: React.FunctionComponent = ({ children }) => {
	const dyingLightProps = useDyingLight();

	return <Subtitle {...dyingLightProps}>{children}</Subtitle>;
};

const drawing = (canvas: HTMLCanvasElement) => {
	const context = canvas.getContext('2d');
	if (!context) return null;
	context.fillStyle = 'red';
	context.fillRect(0, 0, 10, 10);
};

export const Heading: React.FunctionComponent = () => {
	const [canvasRef] = useCanvas(drawing, false);

	return (
		<HeaderWrapper data-testid="heading">
			<canvas ref={canvasRef} />
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
};

export default Heading;
