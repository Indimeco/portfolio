import styled from 'styled-components';

export const PortfolioList = styled.div``;

export const PortfolioItem = styled.div`
	padding: ${({ theme }) => theme.spacing.medium} 0;
`;

export const PortfolioPreview = styled.div`
	height: 30vh;
	display: grid;
	align-items: flex-start;
	grid-template-columns: 1fr 2fr;
	grid-column-gap: ${({ theme }) => theme.spacing.medium};
`;

export const PortfolioControl = styled.button`
	width: 100%;
	background-color: transparent;
	font-weight: unset;
	border: none;
	text-align: left;
	padding: 0;
	margin: 0;
`;

export const Thumbnail = styled.div`
	background-color: black;
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
