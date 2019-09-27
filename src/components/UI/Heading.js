import { css } from 'styled-components';

export const Heading = ({ theme }) => css`
	color: ${theme.colors.root.fg};
	font-size: ${theme.fonts.huge};
	font-family: ${theme.fontFamilies.headings};
	margin: 0 0 ${theme.spacing.large} 0;
`;
