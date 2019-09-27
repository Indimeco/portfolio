import styled, { css } from 'styled-components';
import { indent } from '../UI/Spacing';
import { heading } from '../UI/snippets/heading';

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
	padding-top: ${({ theme }) => theme.spacing.large};
	padding-bottom: ${({ theme }) => theme.spacing.large};
	${sectoinGradient}
`;

export const SectContent = styled.div`
	${indent}
`;

export const SectHeading = styled.h2`
	${heading}
`;
