import styled from 'styled-components';
import { heading, text, view, indent } from '../UI/utils';
import {
	FONT_LARGE,
	SPACE_MEDIUM,
	SPACE_HUGE,
	SPACE_SMALL,
	MEDIA_1,
} from '../UI/base';

export const PortfolioView = styled.div`
	${view}
`;

export const PortfolioWrapper = styled.div`
	${indent}
`;

export const PortfolioHeading = styled.h2`
	${heading};
	padding-top: ${SPACE_HUGE};
	margin-bottom: 0;
`;

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
	border: 3px solid ${({ theme }) => theme.colors.bg};
	background-color: ${({ theme }) => theme.colors.bgAccent};
	color: ${({ theme }) => theme.colors.brand};
	padding: ${SPACE_SMALL};
	margin: 0;
	cursor: pointer;

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.colors.fg};
		box-shadow: 0 0 4px -2px ${({ theme }) => theme.colors.brand};
	}

	@media only screen and (min-width: ${MEDIA_1}) {
		margin: 0;
	}
`;
