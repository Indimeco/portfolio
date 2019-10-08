import { css } from 'styled-components';
import { SPACE_MEDIUM, SPACE_MEGA, MEDIA_1 } from '../base';

export const indent = () => css`
	margin-left: ${SPACE_MEDIUM};
	margin-right: ${SPACE_MEDIUM};

	@media only screen and (min-width: ${MEDIA_1}) {
		margin-left: ${SPACE_MEGA};
		margin-right: ${SPACE_MEGA};
	}
`;
