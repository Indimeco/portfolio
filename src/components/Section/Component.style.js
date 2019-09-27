import styled, { css } from 'styled-components';

const sectoinGradient = ({
	theme: {
		colors: { root },
	},
	alternate,
}) => {
	const start = alternate ? root.bg : root.bgAccent;
	const end = alternate ? root.bgAccent : root.bg;
	return css`
		background-image: linear-gradient(to top, ${start} 10%, ${end} 90%);
	`;
};

export const Sect = styled.section`
	min-height: 80vh;
	${({ theme }) => theme.spacing.indent}
	padding-top: ${({ theme }) => theme.spacing.large};
	padding-bottom: ${({ theme }) => theme.spacing.large};
	${sectoinGradient}
`;

export const SectHeading = styled.h2`
	margin: 0 0 ${({ theme }) => theme.spacing.large} 0;
	font-size: ${({ theme }) => theme.fonts.huge};
	font-family: ${({ theme }) => theme.fontFamilies.heading};
`;
