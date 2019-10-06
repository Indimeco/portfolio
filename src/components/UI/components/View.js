import styled from 'styled-components';
import React from 'react';

const ViewBox = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

const ViewContent = styled.div`
	width: 100%;
`;
export const View = ({ children }) => (
	<ViewBox>
		<ViewContent>{children}</ViewContent>
	</ViewBox>
);
