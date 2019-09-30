import { css } from 'styled-components';
import { FONT_HEADING, FONT_HUGE } from '../base/font';

export const heading = ({ theme }) => css`
	color: ${theme.colors.root.fg};
	font-size: ${FONT_HUGE};
	font-family: ${FONT_HEADING};
	margin: 0 0 ${theme.spacing.large} 0;
`;
