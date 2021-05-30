import React from 'react';
import styled from 'styled-components';

import { DrawingSetup, DrawVars } from './drawing';
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

type Props = {
	draw: DrawingSetup;
	drawVars?: DrawVars;
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
