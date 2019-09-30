import styled from 'styled-components';
import { text } from '../UI/snippets/text';

export const NavigationWrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	background-color: ${({ theme }) => theme.colors.aux.bg};
	position: sticky;
	top: 0;
	min-height: 7vh;
	margin-bottom: 0;
`;

export const NavigationItem = styled.button`
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
