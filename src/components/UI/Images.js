import styled from 'styled-components';
import { SPACE_SMALL } from './base/space';

export const Image = styled.img`
	width: ${({ width }) => width || '100%'};
	height: 100%;
	margin: 0;
`;

export const ImageWrapper = styled.div`
	object-fit: cover;
	background-color: black;
	grid-area: image;
	margin-bottom: ${SPACE_SMALL};
`;
