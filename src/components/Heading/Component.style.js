import styled from 'styled-components';
import { indent } from '../UI/Spacing';

export const HeaderWrapper = styled.header`
	${indent}
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-areas: 'title image';
	grid-column-gap: ${({ theme }) => theme.spacing.tiny};

	@media only screen and (min-width: 576px) {
		grid-template-columns: 2fr 2fr 1fr;
		grid-template-areas: 'offset title image';
		grid-column-gap: ${({ theme }) => theme.spacing.small};
	}
`;
export const Title = styled.h1`
	font-family: ${({ theme }) => theme.fontFamilies.heading};
	font-size: ${({ theme }) => theme.fonts.hero};
	font-weight: 600;
	color: ${({ theme }) => theme.colors.root.fg};
	margin-bottom: ${({ theme }) => theme.spacing.small};
	margin-top: 0;
`;

export const Subtitle = styled.span`
	font-family: ${({ theme }) => theme.fontFamilies.heading};
	font-size: ${({ theme }) => theme.fonts.huge};
	font-weight: 400;
	color: ${({ theme }) => theme.colors.root.fg};
	margin-bottom: ${({ theme }) => theme.spacing.small};
	margin-top: 0;
`;

export const TitleWrapper = styled.div`
	grid-area: title;
`;
