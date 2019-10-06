import styled from 'styled-components';
import { FONT_HERO, SPACE_SMALL } from '../UI/base';

export const SocialWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

// TODO Consolidate into link component. Very similar between footer and navigation and content links
export const SocialLink = styled.a`
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.fg};
	cursor: pointer;
	font-size: ${FONT_HERO};
	margin: 0;
	padding: 0 ${SPACE_SMALL};
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.colors.fgAccent};
	}
`;
