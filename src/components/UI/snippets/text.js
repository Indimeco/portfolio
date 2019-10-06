import { css } from 'styled-components';
import { FONT_SMALL, FONT_CONTENT } from '../base/font';
import { SPACE_SMALL } from '../base/space';

export const text = ({ theme }) => css`
	color: ${theme.colors.fg};
	font-size: ${FONT_SMALL};
	font-family: ${FONT_CONTENT};
	margin: 0 0 ${SPACE_SMALL} 0;
`;
