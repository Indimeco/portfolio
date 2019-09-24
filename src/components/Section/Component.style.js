import styled from 'styled-components';

export const Sect = styled.section`
	min-height: 80vh;
	background-color: ${({ theme, alternate }) =>
		alternate ? theme.colors.root.bgAccent : theme.colors.root.bg};
	${({ theme }) => theme.spacing.indent}
	padding-top: ${({ theme }) => theme.spacing.large};
	padding-bottom: ${({ theme }) => theme.spacing.large};
`;

export const SectHeading = styled.h2`
	margin: 0 0 ${({ theme }) => theme.spacing.large} 0;
	font-size: ${({ theme }) => theme.fonts.huge};
	font-family: ${({ theme }) => theme.fontFamilies.heading};
`;
