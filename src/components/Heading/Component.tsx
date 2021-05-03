import React, { useLayoutEffect, useRef } from 'react';

import { heading } from '../../content';
import { useDyingLight, FadeOnScroll } from '../UI/utils';

import { HeaderWrapper, TitleWrapper, Title, Subtitle, HeaderImage } from './Component.style';

const { title, description, headshot } = heading;

const SubtitleLight: React.FunctionComponent = ({ children }) => {
	const dyingLightProps = useDyingLight();

	return <Subtitle {...dyingLightProps}>{children}</Subtitle>;
};

type Props = {
	setTitleLevel: (level: number) => void;
};

export const Heading: React.FunctionComponent<Props> = ({ setTitleLevel }) => {
	const titleRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (titleRef.current) {
			console.log(titleRef.current.getBoundingClientRect().bottom);
			setTitleLevel(titleRef.current.getBoundingClientRect().bottom);
		}
	}, [titleRef, setTitleLevel]);
	return (
		<HeaderWrapper data-testid="heading">
			<FadeOnScroll>
				<TitleWrapper ref={titleRef}>
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
