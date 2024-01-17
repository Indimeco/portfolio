import React from 'react';
import styled from 'styled-components';

import { DrawingSetup, Landmarks } from './drawings';
import { useCanvas } from './useCanvas';

const BackgroundCanvas = styled.canvas`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	z-index: -1;
`;

type Props = {
	draw: DrawingSetup;
	drawVars?: Landmarks;
	shouldAnimate?: boolean;
};
export const CanvasDrawing: React.FC<Props> = ({ draw, drawVars }) => {
	const [canvasRef] = useCanvas(draw, drawVars);

	return <BackgroundCanvas ref={canvasRef} id="canvas" />;
};
