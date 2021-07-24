import styled from 'styled-components';

import { heading, title, indent, center, dyingLightStyles, onLight } from '../UI/utils';
import { MEDIA_1, FONT_HERO, SPACE_SMALL, SPACE_MEDIUM, SPACE_HUGE } from '../UI/base';

export const HeaderWrapper = styled.header`
	${indent};
	${center};
	min-height: 100vh;

	display: flex;
	align-items: flex-start;
	flex-direction: column-reverse;
	justify-content: center;

	@media only screen and (min-width: ${MEDIA_1}) {
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
`;

export const SignBody = styled.div`
	background-color: black;
	box-shadow: 0 6px 6px black;
	padding: ${SPACE_MEDIUM};
`;

export const SignScaffolding = styled.div`
	width: 50%;
	position: absolute;
	left: -42%;
	top: ${SPACE_SMALL};
	height: ${SPACE_HUGE};
	z-index: -1;
`;

export const SignLayout = styled.div`
	position: relative;
`;

export const Title = styled.h1`
	${heading};
	font-size: ${FONT_HERO};
	font-weight: 600;
	margin-bottom: ${SPACE_SMALL};
	margin-top: 0;
	${onLight};

	@media only screen and (min-width: ${MEDIA_1}) {
		text-align: center;
	}
`;

export const Subtitle = styled.div`
	${title};
	margin-bottom: ${SPACE_SMALL};
	${dyingLightStyles};

	@media only screen and (min-width: ${MEDIA_1}) {
		text-align: center;
	}
`;
