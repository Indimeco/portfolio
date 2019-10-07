import styled from 'styled-components';
import { SPACE_HUGE } from '../../UI/base';

export const PortfolioItem = styled.div`
	padding: ${SPACE_HUGE} 0;
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-column-gap: 5vw;
`;

export const PortfolioThumbnail = styled.div`
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
