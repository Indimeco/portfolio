import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.main.bg};
	text-align: right;
`;

export const NavigationItem = styled.a`
	padding: 0 ${({ theme }) => theme.spacing.small};
	color: ${({ theme }) => theme.colors.main.fg};
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.colors.main.fgAccent};
	}
`;
