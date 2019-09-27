import styled from 'styled-components';
import { indent } from '../UI/Spacing';
import { heading } from '../UI/snippets/heading';

export const HeaderWrapper = styled.header`
	${indent}
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-areas: 'title image';
	grid-column-gap: ${({ theme }) => theme.spacing.tiny};

	@media only screen and (min-width: 768px) {
		grid-template-columns: 2fr 2fr 1fr;
		grid-template-areas:
			'offset title image'
			'decor decor decor';
		grid-column-gap: ${({ theme }) => theme.spacing.small};
	}
`;

export const Title = styled.h1`
	${heading}
	font-size: ${({ theme }) => theme.fonts.hero};
	font-weight: 600;
	margin-bottom: ${({ theme }) => theme.spacing.small};
	margin-top: 0;
`;

export const Subtitle = styled.div`
	${heading}
	margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const TitleWrapper = styled.div`
	grid-area: title;
`;
