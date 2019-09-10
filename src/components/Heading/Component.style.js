import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	text-align: center;
`;
export const Title = styled.h1`
	font-family: ${({ theme }) => theme.fonts.fontFamily};
	font-size: ${({ theme }) => theme.fonts.hero};
	font-weight: 600;
	color: ${({ theme }) => theme.colors.root.fg};
	margin-bottom: ${({ theme }) => theme.spacing.small};
	margin-top: 0;
`;

export const Subtitle = styled.h2`
	font-family: ${({ theme }) => theme.fonts.fontFamily};
	font-size: ${({ theme }) => theme.fonts.huge};
	font-weight: 400;
	color: ${({ theme }) => theme.colors.root.fg};
	margin-bottom: ${({ theme }) => theme.spacing.small};
	margin-top: 0;
`;
