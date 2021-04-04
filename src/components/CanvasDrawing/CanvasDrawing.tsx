import React from 'react';
import styled from 'styled-components';

import { useCanvas } from './useCanvas';

const BackgroundCanvas = styled.canvas`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
	background-color: black;
`;

const BackgroundCanvasContext = styled.div`
	position: relative;
	z-index: 0;
`;

export const CanvasDrawing: React.FC = ({ children }) => {
	const [canvasRef] = useCanvas(false);

	return (
		<BackgroundCanvasContext>
			<BackgroundCanvas ref={canvasRef} />
			{children}
		</BackgroundCanvasContext>
	);
};
