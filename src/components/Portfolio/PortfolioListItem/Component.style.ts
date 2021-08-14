import styled from 'styled-components';

import { MEDIA_1, SPACE_HUGE } from '../../UI/base';

export const PortfolioItem = styled.div`
	padding: ${SPACE_HUGE} 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-row-gap: 5vh;

	min-height: 50vh;

	@media only screen and (min-width: ${MEDIA_1}) {
		min-height: 30vh;
		grid-column-gap: 5vw;
		grid-template-columns: 2fr 5fr;
	}
`;

export const PortfolioThumbnail = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
`;
