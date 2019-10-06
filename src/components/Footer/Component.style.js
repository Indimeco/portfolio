import styled from 'styled-components';
import { text } from '../UI/snippets/text';
import { FONT_SMALL } from '../UI/base/font';
import { SPACE_MEDIUM, SPACE_SMALL } from '../UI/base/space';

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
