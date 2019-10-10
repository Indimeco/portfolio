import styled, { css } from 'styled-components';
import { heading } from '../UI/snippets';
import { SPACE_LARGE } from '../UI/base';

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
	${sectionGradient};
`;

export const SectHeading = styled.h2`
	${heading};
`;
