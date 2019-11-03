import styled from 'styled-components';
import { heading, indent, center, dyingLightStyles, onLight } from '../UI/utils';
import { MEDIA_1, FONT_HERO, SPACE_SMALL } from '../UI/base';

export const HeaderWrapper = styled.header`
	${indent};
	${center};
	min-height: 100vh;

	display: flex;
	align-items: center;

	@media only screen and (min-width: ${MEDIA_1}) {
		justify-content: space-around;
	}
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
	${heading};
	margin-bottom: ${SPACE_SMALL};
	${dyingLightStyles};

	@media only screen and (min-width: ${MEDIA_1}) {
		text-align: center;
	}
`;

export const TitleWrapper = styled.div`
	margin-right: 10vw;
`;

export const HeaderImage = styled.img`
	width: calc(10vw + 10vh + 0.5vmin);
	border-radius: 50%;
`;
