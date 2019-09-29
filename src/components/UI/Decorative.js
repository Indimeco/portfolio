import styled from 'styled-components';
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { root } from './base/palette';
import { WATERFALL_2 } from './base/animations';

const DecorArea = styled.div`
	grid-area: decor;
`;

const Gradient = styled.svg`
	visibility: hidden;

	@media only screen and (min-width: 768px) {
		display: block;
		width: 100%;
		margin-left: auto;
		visibility: visible;

		&.stroke-appear {
			clip-path: inset(0 0 0 100%);
		}
		&.stroke-appear-active {
			transition: clip-path ${WATERFALL_2}ms ease;
			clip-path: inset(0 0 0 0);
		}
	}
`;

const Line = styled.line`
	transform-origin: 50% 2px;
`;

export const FadeLine = () => {
	return (
		<DecorArea>
			<CSSTransitionGroup
				transitionName="stroke"
				transitionAppear={true}
				transitionAppearTimeout={WATERFALL_2}
				transitionEnterTimeout={100}
				transitionLeaveTimeout={100}
			>
				<Gradient>
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
				</Gradient>
			</CSSTransitionGroup>
		</DecorArea>
	);
};
