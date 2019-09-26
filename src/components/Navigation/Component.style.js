import styled from 'styled-components';
import { Text } from '../UI/Text';

export const NavigationWrapper = styled.nav`
	padding: ${({ theme }) => theme.spacing.medium};
	background-color: ${({ theme }) => theme.colors.main.bg};
	text-align: right;
	position: sticky;
	top: 0;
`;

export const NavigationItem = styled.button`
	${Text}
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.main.fg};
	cursor: pointer;
	font-size: ${({ theme }) => theme.fonts.small};
	margin: 0;
	padding: 0 ${({ theme }) => theme.spacing.small};
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.colors.main.fgAccent};
	}
`;
