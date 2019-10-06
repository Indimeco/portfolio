import styled from 'styled-components';
import { heading, text } from '../UI/snippets';
import { FONT_LARGE, SPACE_MEDIUM } from '../UI/base';

export const PortfolioList = styled.div``;
export const PortfolioAccordion = styled.div``;
export const PortfolioItemContent = styled.div``;
export const PortfolioItemContentArea = styled.div``;
export const PortfolioButton = styled.button``;

export const PortfolioItemName = styled.h3`
	${heading};
	font-size: ${FONT_LARGE};
	margin-bottom: ${SPACE_MEDIUM};
`;
export const PortfolioItemDescription = styled.p`
	${text};
`;

export const PortfolioItem = styled.div`
	padding: ${SPACE_MEDIUM} 0;
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-column-gap: ${SPACE_MEDIUM};
`;

export const PortfolioControl = styled.button`
	${text};
	width: 100%;
	background-color: transparent;
	font-weight: unset;
	border: none;
	text-align: left;
	padding: 0;
	margin: 0;
`;

export const Thumbnail = styled.div`
	height: 30vh;

	&,
	a,
	img {
		width: 100%;
		max-height: 100%;
	}

	img {
		object-fit: cover;
	}
`;
