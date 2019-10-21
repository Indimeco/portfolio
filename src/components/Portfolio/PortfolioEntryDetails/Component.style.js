import styled from 'styled-components';
import { SPACE_LARGE, SPACE_HUGE, MEDIA_1 } from '../../UI/base';
import { text } from '../../UI/snippets';

export const PortfolioItemContentHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${SPACE_LARGE};
	padding-top: ${SPACE_HUGE};
`;

export const PortfolioItemBlurb = styled.h4`
	${text}
	text-align: center;
	color: ${({ theme }) => theme.colors.aux};
	margin: ${SPACE_HUGE} 0 ${SPACE_LARGE} auto;

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
