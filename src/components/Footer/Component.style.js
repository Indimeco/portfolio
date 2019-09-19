import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	padding: ${({ theme }) => theme.spacing.medium};
	background-color: ${({ theme }) => theme.colors.aux.bg};
	text-align: right;
`;

export const FooterContent = styled.a`
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.aux.fg};
	cursor: pointer;
	font-size: ${({ theme }) => theme.fonts.small};
	font-family: ${({ theme }) => theme.fonts.fontFamily};
	margin: 0;
	padding: 0 ${({ theme }) => theme.spacing.small};
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.colors.aux.fgAccent};
	}
`;
