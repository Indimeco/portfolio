import styled, { css } from 'styled-components';
import React from 'react';
import { SPACE_SMALL, SPACE_HUGE } from './base/space';

export const indent = () => css`
	margin-left: ${SPACE_SMALL};
	margin-right: ${SPACE_SMALL};

	@media only screen and (min-width: 768px) {
		margin-left: ${SPACE_HUGE};
		margin-right: ${SPACE_HUGE};
	}
`;

const ViewBox = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
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
