import { css } from 'styled-components';
import { FONT_HEADING, FONT_HUGE } from '../base/font';
import { SPACE_HUGE } from '../base/space';

export const heading = ({ theme }) => css`
	color: ${theme.colors.fg};
	font-size: ${FONT_HUGE};
	font-family: ${FONT_HEADING};
	margin: 0 0 ${SPACE_HUGE} 0;
`;
