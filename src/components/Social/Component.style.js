import styled from 'styled-components';

export const SocialWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

// TODO Consolidate into link component. Very similar between footer and navigation and content links
export const SocialLink = styled.a`
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.root.fg};
	cursor: pointer;
	font-size: ${({ theme }) => theme.fonts.hero};
	font-family: ${({ theme }) => theme.fonts.fontFamily};
	margin: 0;
	padding: 0 ${({ theme }) => theme.spacing.small};
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.colors.root.fgAccent};
	}
`;
