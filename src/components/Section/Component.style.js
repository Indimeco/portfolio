import styled, { css } from 'styled-components';
import { indent } from '../UI/Spacing';
import { heading } from '../UI/snippets/heading';
import { SPACE_LARGE } from '../UI/base/space';

const sectionGradient = ({ theme: { colors }, alternate }) => {
	const start = alternate ? colors.bg : colors.bgAccent;
	const end = alternate ? colors.bgAccent : colors.bg;
	return css`
		background-image: linear-gradient(to top, ${start} 10%, ${end} 90%);
	`;
};

export const Sect = styled.section`
	padding-top: ${SPACE_LARGE};
	padding-bottom: ${SPACE_LARGE};
	${sectionGradient}
`;

export const SectContent = styled.div`
	${indent}
`;

export const SectHeading = styled.h2`
	${heading}
`;
