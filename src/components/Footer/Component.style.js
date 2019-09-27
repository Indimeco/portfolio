import styled from 'styled-components';
import { text } from '../UI/snippets/text';

export const FooterWrapper = styled.footer`
	padding: ${({ theme }) => theme.spacing.medium};
	background-color: ${({ theme }) => theme.colors.aux.bg};
	text-align: right;
`;

export const FooterContent = styled.a`
	${text}
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.aux.fg};
	cursor: pointer;
	font-size: ${({ theme }) => theme.fonts.small};
	margin: 0;
	padding: 0 ${({ theme }) => theme.spacing.small};
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.colors.aux.fgAccent};
	}
`;
