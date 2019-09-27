import styled from 'styled-components';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { root } from './base/palette';

const Decor = animated(styled.svg`
	visibility: hidden;

	@media only screen and (min-width: 768px) {
		grid-area: decor;
		width: 100%;
		visibility: visible;
	}
`);

const Line = styled.line`
	transform-origin: 50% 2px;
`;

export const FadeLine = () => {
	const spring = useSpring({ x: 0, from: { x: 1000 } });

	return (
		<Decor strokeDashoffset={spring.x} strokeDasharray="1000">
			<defs>
				<linearGradient id="decorative-fade">
					<stop offset="0" stopColor={root.bg} />
					<stop offset="5%" stopColor={root.fg} />
					<stop offset="50%" stopColor={root.fgAccent} />
					<stop offset="85%" stopColor={root.bg} />
				</linearGradient>
			</defs>
			<Line
				x1="1"
				y1="2"
				x2="100%"
				y2="1"
				stroke="url('#decorative-fade')"
				transform="rotate(180)"
			/>
		</Decor>
	);
};
