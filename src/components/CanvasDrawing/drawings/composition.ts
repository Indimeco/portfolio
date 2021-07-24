import { pipe } from 'ramda';

import { Coordinate, tracePolygon, getRectangularPlane } from '../drawing';

import { DrawingSetup } from './types';
import { drawBuildings } from './drawBuildings';
import { drawUnderground } from './drawUnderground';

export const composeDrawings: DrawingSetup = (canvas, vanishingPointY, landmarks) => {
	const ctx = canvas.getContext('2d');
	if (!ctx) return null;

	const HORIZON_Y_OFFSET = 140;
	const VANISHING_X_OFFSET = 300;
	const vanishingPoint: Coordinate = {
		x: VANISHING_X_OFFSET,
		y: HORIZON_Y_OFFSET,
	};

	const { width: canvasWidth, height: canvasHeight } = canvas.getBoundingClientRect();
	// We need to set the canvas via javascript because setting it through CSS only scales pixels
	// eslint-disable-next-line no-param-reassign
	canvas.width = canvasWidth;
	// eslint-disable-next-line no-param-reassign
	canvas.height = canvasHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Draw horizon
	tracePolygon(
		ctx,
		...getRectangularPlane({
			origin: { x: 0, y: canvasHeight, z: 0 },
			width: canvasWidth,
			height: canvasHeight - HORIZON_Y_OFFSET,
		}).map((o) => ({ x: o.x, y: o.y })),
	);
	ctx.fillStyle = 'black';
	ctx.fill();

	// Draw the vanishing point
	tracePolygon(
		ctx,
		...getRectangularPlane({
			origin: { x: vanishingPoint.x, y: vanishingPoint.y, z: -1 },
			width: 2,
			height: 2,
		}).map((o) => ({ x: o.x, y: o.y })),
	);
	ctx.fillStyle = 'red';
	ctx.fill();

	return {
		canvas,
		ctx,
		vanishingPoint,
		drawVars: {
			...landmarks,
			observerDistanceFromPicturePlane: 500,
			maximumDepth: 300000,
		},
	};
};

export const composition = pipe(composeDrawings, drawBuildings, drawUnderground);
