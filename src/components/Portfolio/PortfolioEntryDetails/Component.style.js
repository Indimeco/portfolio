import styled from 'styled-components';
import { SPACE_LARGE, SPACE_HUGE } from '../../UI/base';
import { text } from '../../UI/snippets';

export const PortfolioItemContentHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${SPACE_LARGE};
`;

export const PortfolioItemBlurb = styled.h4`
	${text}
	text-align: right;
	color: ${({ theme }) => theme.colors.fgAccent};
	margin: ${SPACE_HUGE} 0 ${SPACE_LARGE} auto;
`;

export const PortfolioContentArea = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	& > * {
		width: 65%;
	}
`;
