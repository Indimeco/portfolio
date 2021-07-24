import React, { useLayoutEffect, useRef } from 'react';

import { heading } from '../../content';
import { useDyingLight, FadeOnScroll } from '../UI/utils';

import { HeaderWrapper, Title, Subtitle, SignBody, SignScaffolding, SignLayout } from './Component.style';

const { title, description } = heading;

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
			setTitleLevel(titleRef.current.getBoundingClientRect().bottom);
		}
	}, [titleRef, setTitleLevel]);
	return (
		<HeaderWrapper data-testid="heading">
			<FadeOnScroll>
				<SignLayout>
					<SignScaffolding>
						<svg viewBox="0 0 24 12">
							<defs />
							<g>
								<path fillRule="evenodd" d="M0 1.37v9.49h19.09V1.37zm.32.48h18.44v8.53H.32z" />
								<path fillRule="evenodd" d="M16.81 1.35V10.8h7.05V1.35zm.3.43h6.46v8.59H17.1z" />
								<path d="M.23 1.39l-.11.44 16.81 9.1.12-.44z" />
								<path d="M16.94 1.4l-16.82 9 .1.44 16.83-9zM18.75 0v1.6h.35V0z" />
								<path d="M16.84 0l-.01 1.61h.32V.02zM18.73 10.86v1.6h.35v-1.6zM16.37 3.6v.52h3.14V3.6zM16.4 7.08v.52h3.14v-.52zM16.81 10.8v1.6h.35v-1.6z" />
							</g>
						</svg>
					</SignScaffolding>
					<SignBody ref={titleRef}>
						<Title>{title}</Title>
						<SubtitleLight>{description}</SubtitleLight>
					</SignBody>
				</SignLayout>
			</FadeOnScroll>
		</HeaderWrapper>
	);
};

export default Heading;
