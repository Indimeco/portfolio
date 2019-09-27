import { css } from 'styled-components';

export const indent = ({ theme }) => css`
	margin-left: ${theme.spacing.small};
	margin-right: ${theme.spacing.small};

	@media only screen and (min-width: 576px) {
		margin-left: ${theme.spacing.huge};
		margin-right: ${theme.spacing.huge};
	}
`;
