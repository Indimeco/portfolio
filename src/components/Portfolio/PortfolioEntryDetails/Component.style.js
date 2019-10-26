import styled, { keyframes } from 'styled-components';
import { SPACE_LARGE, SPACE_HUGE, MEDIA_1 } from '../../UI/base';
import { text } from '../../UI/snippets';

const flickerAnimation = keyframes`
	40% {
		opacity: 0.8;
	}
	42% {
		opacity: 0.1;
	}
	43% {
		opacity: 0.8;
	}
	45% {
		opacity: 0.1;
	}
	46% {
		opacity: 0.8;
	}
`;

export const PortfolioItemContentHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${SPACE_LARGE};
	padding-top: ${SPACE_HUGE};
`;

export const PortfolioItemBlurb = styled.h4`
	${text} text-align: center;
	color: ${({ theme }) => theme.colors.aux};
	margin: ${SPACE_HUGE} 0 ${SPACE_LARGE} auto;
	text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3), 0 0px 15px black,
		0 0 16px ${({ theme }) => theme.colors.auxAccent + 'D0'},
		0 0 50px ${({ theme }) => theme.colors.auxAccent + '80'};
	animation: 1s ${flickerAnimation} ease-out infinite;

	@media only screen and (min-width: ${MEDIA_1}) {
		text-align: right;
	}
`;

export const PortfolioContentArea = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	margin-bottom: ${SPACE_LARGE};
	& > * {
		width: 100%;
	}

	@media only screen and (min-width: ${MEDIA_1}) {
		& > * {
			width: 65%;
		}
	}
`;
