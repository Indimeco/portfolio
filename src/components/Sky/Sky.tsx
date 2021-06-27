import React from 'react';
import styled from 'styled-components';

const SkyBackground = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	background: linear-gradient(black, white 90%);
`;

const SkyContext = styled.div`
	position: sticky;
	top: 0;
	z-index: -2;
`;

export const Sky: React.FC = () => (
	<SkyContext>
		<SkyBackground />
	</SkyContext>
);
