import { css } from 'styled-components';
import {
	FONT_MEDIUM,
	FONT_CONTENT,
	FONT_HEADING,
	FONT_HUGE,
	SPACE_SMALL,
	SPACE_HUGE,
} from '../base';

export const heading = ({ theme }) => css`
	color: ${theme.colors.fg};
	font-size: ${FONT_HUGE};
	font-family: ${FONT_HEADING};
	margin: 0 0 ${SPACE_HUGE} 0;
`;

export const text = ({ theme }) => css`
	color: ${theme.colors.fg};
	font-size: ${FONT_MEDIUM};
	font-family: ${FONT_CONTENT};
	margin: 0 0 ${SPACE_SMALL} 0;
`;
