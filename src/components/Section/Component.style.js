import styled, { css } from 'styled-components';

const sectionGradient = ({ theme: { colors }, alternate }) => {
	const start = alternate ? colors.bg : colors.bgAccent;
	const end = alternate ? colors.bgAccent : colors.bg;
	return css`
		background-image: linear-gradient(to top, ${start} 10%, ${end} 90%);
	`;
};

export const Sect = styled.section`
	${sectionGradient};
`;
