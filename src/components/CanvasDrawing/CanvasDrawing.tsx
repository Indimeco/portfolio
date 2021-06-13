import React from 'react';
import styled from 'styled-components';

import { DrawingSetup, Landmarks } from './drawings';
import { useCanvas } from './useCanvas';

const BackgroundCanvas = styled.canvas`
	position: absolute;
	background-color: black;
	width: 100%;
	height: 100vh;
`;

const BackgroundCanvasContext = styled.div`
	position: sticky;
	top: 0;
	z-index: -1;
`;

type Props = {
	draw: DrawingSetup;
	drawVars?: Landmarks;
	shouldAnimate?: boolean;
};
export const CanvasDrawing: React.FC<Props> = ({ draw, drawVars, children }) => {
	const [canvasRef] = useCanvas(draw, drawVars);

	return (
		<BackgroundCanvasContext>
			<BackgroundCanvas ref={canvasRef} />
			{children}
		</BackgroundCanvasContext>
	);
};
