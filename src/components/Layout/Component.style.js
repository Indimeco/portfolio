import styled from 'styled-components';

export const Root = styled.div`
	color: ${({ theme }) => theme.colors.root.fg};
	background-color: ${({ theme }) => theme.colors.root.bg};
`;
