import { css } from 'styled-components';
import { SPACE_SMALL, SPACE_HUGE, MEDIA_1 } from '../base';

export const indent = () => css`
	margin-left: ${SPACE_SMALL};
	margin-right: ${SPACE_SMALL};

	@media only screen and (min-width: ${MEDIA_1}) {
		margin-left: ${SPACE_HUGE};
		margin-right: ${SPACE_HUGE};
	}
`;
