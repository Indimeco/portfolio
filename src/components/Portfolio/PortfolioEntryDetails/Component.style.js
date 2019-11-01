import styled, { keyframes, css } from 'styled-components';
import { SPACE_LARGE, SPACE_HUGE, MEDIA_1 } from '../../UI/base';
import { text } from '../../UI/utils';

const off = ({ theme }) => css`
	text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3), 0 0px 15px ${theme.colors.bg}, 0 0 16px ${theme.colors.bg},
		0 0 50px ${theme.colors.bg};
	color: ${theme.colors.auxAccent};
`;

const on = ({ theme }) => css`
	text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3), 0 0px 15px black, 0 0 16px ${theme.colors.auxAccent + 'D0'},
		0 0 50px ${theme.colors.auxAccent + '80'};
	color: ${theme.colors.aux};
`;

export const sputterAnimation = ({ theme }) => {
	const onStyle = on({ theme });
	const offStyle = off({ theme });

	return keyframes`
		40% {
			${onStyle};
		}
		41% {	
			${offStyle};
		}
		42% {
			${onStyle};
		}
		43% {
			${offStyle};
		}
		44% {
			${onStyle};
		}
	`;
};

export const dieAnimation = ({ theme }) => {
	const onStyle = on({ theme });
	const offStyle = off({ theme });

	return keyframes`
		69% {
			${onStyle};
		}
		70% {
			${offStyle};
		}
		97% {
			${offStyle};
		}
		98% {
			${onStyle};
		}
		99% {
			${offStyle};
		}
		100% {
			${onStyle};
		}
	`;
};

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
	animation: ${({ seed }) => seed}s ${({ animation }) => animation} linear infinite;

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
