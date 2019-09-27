import styled from 'styled-components';

export const Figure = styled.figure`
	width: 100%;
	height: 100%;
	margin: 0;
`;

export const ImageWrapper = styled.div`
	object-fit: cover;
	background-color: black;
	grid-area: image;
	margin-bottom: ${({ theme }) => theme.spacing.small};
`;
