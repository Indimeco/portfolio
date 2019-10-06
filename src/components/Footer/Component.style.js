import styled from 'styled-components';
import { text } from '../UI/snippets';
import { FONT_SMALL, SPACE_MEDIUM, SPACE_SMALL } from '../UI/base';

export const FooterWrapper = styled.footer`
	padding: ${SPACE_MEDIUM};
	background-color: ${({ theme }) => theme.colors.bg};
	text-align: right;
`;

export const FooterContent = styled.a`
	${text} background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.fg};
	cursor: pointer;
	font-size: ${FONT_SMALL};
	margin: 0;
	padding: 0 ${SPACE_SMALL};
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.colors.fgAccent};
	}
`;
