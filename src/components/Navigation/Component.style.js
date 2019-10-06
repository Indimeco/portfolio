import styled from 'styled-components';
import { text } from '../UI/snippets/text';
import { FONT_SMALL } from '../UI/base/font';
import { SPACE_SMALL } from '../UI/base/space';

export const NavigationWrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	background-color: ${({ theme }) => theme.colors.bg};
	top: 0;
	min-height: 7vh;
	margin-bottom: 0;
`;

export const NavigationItem = styled.button`
	${text}
	background-color: transparent;
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
