import { css } from 'styled-components';

export const Text = ({ theme }) => css`
	color: ${theme.colors.root.fg};
	font-size: ${theme.fonts.medium};
	font-family: ${theme.fontFamilies.content};
	margin: 0 0 ${theme.spacing.small} 0;
`;
