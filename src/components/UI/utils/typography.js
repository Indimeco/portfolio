import { css } from 'styled-components';
import { FONT_MEDIUM, FONT_CONTENT, FONT_HEADING, FONT_HUGE, SPACE_SMALL, SPACE_HUGE } from '../base';

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
	transition: color 0.2s ease-in;

	&:hover {
		color: ${theme.colors.fg};
	}

	&::after {
		content: '';
		display: block;
		width: 0;
		height: 0.1px;
		box-shadow: 0 6px 6px ${theme.colors.brand};
		background-color: transparent;
		transition: box-shadow 0.2s ease-in, width 0.2s ease-in;
	}

	&:hover::after {
		width: 100%;
		box-shadow: 0 6px 6px 1px ${theme.colors.fg};
	}
`;

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
