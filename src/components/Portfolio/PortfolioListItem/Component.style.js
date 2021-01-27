import styled from 'styled-components';

import { SPACE_HUGE } from '../../UI/base';

export const PortfolioItem = styled.div`
	padding: ${SPACE_HUGE} 0;
	display: grid;
	grid-template-columns: 2fr 5fr;
	grid-column-gap: 5vw;
`;

export const PortfolioThumbnail = styled.div`
	height: 30vh;

	&,
	img {
		width: 100%;
		max-height: 100%;
	}

	img {
		object-fit: cover;
	}
`;
