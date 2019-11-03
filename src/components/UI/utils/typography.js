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

// TODO create nice ui for all links
export const link = ({ theme }) => css`
	cursor: pointer;
	background-color: transparent;
	color: ${theme.colors.brand};
	border: none;
	text-decoration: none;
	&:hover {
		color: ${theme.colors.fg};
	}
export const offLight = ({ theme }) => css`
	text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3), 0 0px 15px ${theme.colors.bg}, 0 0 16px ${theme.colors.bg},
		0 0 50px ${theme.colors.bg};
	color: ${theme.colors.auxAccent};
`;

export const onLight = ({ theme }) => css`
	text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3), 0 0px 15px black, 0 0 30px ${theme.colors.auxAccent},
		0 0 50px ${theme.colors.auxAccent};
	color: ${theme.colors.aux};
`;
