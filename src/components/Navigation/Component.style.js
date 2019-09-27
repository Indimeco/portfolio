import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
	padding: ${({ theme }) => theme.spacing.medium};
	background-color: ${({ theme }) => theme.colors.aux.bg};
	text-align: right;
	position: sticky;
	top: 0;
`;

export const NavigationItem = styled.button`
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.aux.fg};
	cursor: pointer;
	font-size: ${({ theme }) => theme.fonts.small};
	font-family: ${({ theme }) => theme.fontFamilies.content};
	margin: 0;
	padding: 0 ${({ theme }) => theme.spacing.small};
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.colors.aux.fgAccent};
	}
`;
