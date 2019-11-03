import styled from 'styled-components';
import { text, link } from '../../UI/utils';
import { FONT_SMALL, SPACE_MEDIUM, SPACE_SMALL } from '../../UI/base';

export const FooterWrapper = styled.footer`
	display: flex;
	justify-content: flex-end;
	padding: ${SPACE_MEDIUM};
	background-color: ${({ theme }) => theme.colors.bg};
`;

export const FooterContent = styled.a`
	${text};
	${link};
	font-size: ${FONT_SMALL};
	margin: 0;
	padding: 0 ${SPACE_SMALL};
`;
