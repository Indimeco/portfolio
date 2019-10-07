import styled from 'styled-components';
import { heading, text } from '../UI/snippets';
import {
	FONT_LARGE,
	SPACE_MEDIUM,
	SPACE_SMALL,
	MEDIA_1,
	SPACE_HUGE,
} from '../UI/base';

export const PortfolioItemName = styled.h3`
	${heading};
	font-size: ${FONT_LARGE};
	margin-bottom: ${SPACE_MEDIUM};
`;

export const PortfolioItemDescription = styled.p`
	${text};
	margin-bottom: ${SPACE_MEDIUM};
`;

export const PortfolioButton = styled.button`
	${text};
	display: block;
	border: 3px solid ${({ theme }) => theme.colors.fgAccent};
	background-color: transparent;
	color: ${({ theme }) => theme.colors.fgAccent};
	padding: ${SPACE_SMALL};
	margin: ${SPACE_MEDIUM} 0;
	cursor: pointer;

	&:hover,
	&:focus {
		border: 3px solid ${({ theme }) => theme.colors.fgAccent};
		background-color: ${({ theme }) => theme.colors.bgAccent};
		color: ${({ theme }) => theme.colors.fgAccent};
	}

	@media only screen and (min-width: ${MEDIA_1}) {
		margin: ${SPACE_HUGE} auto;
	}
`;
