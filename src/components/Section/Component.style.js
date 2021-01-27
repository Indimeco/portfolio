import styled from 'styled-components';

export const Sect = styled.section`
	background-color: ${({ alternate, theme }) => (alternate ? theme.colors.bgAccent : theme.colors.bg)};
`;
