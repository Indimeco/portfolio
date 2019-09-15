import styled from 'styled-components';

export const Sect = styled.section`
	min-height: 80vh;
	background-color: ${({ theme, alternate }) =>
		alternate ? theme.colors.root.bgAccent : theme.colors.root.bg};
	${({ theme }) => theme.spacing.indent}
`;
