import { add, pipe } from 'ramda';

import { Coordinate, DrawingSetup, tracePolygon, getRectangularPlane } from '../drawing';

import { drawBuildings } from './drawBuildings';
import { drawObelisks } from './drawObelisks';

export enum LandmarkDefinitions {
	StreetLevel = 'StreetLevel',
	TitleLevel = 'TitleLevel',
}

type DrawVars = Record<LandmarkDefinitions, number>;

export const composeDrawings: DrawingSetup<DrawVars> = (canvas, vanishingPointY, drawVars) => {
	const ctx = canvas.getContext('2d');
	if (!ctx) return null;

	const HORIZON__Y_OFFSET = 200;
	const VANISHING_X_OFFSET = 300;
	const vanishingPoint: Coordinate = {
		x: VANISHING_X_OFFSET,
		y: add(vanishingPointY, HORIZON__Y_OFFSET),
	};

	const { width: canvasWidth, height: canvasHeight } = canvas.getBoundingClientRect();
	// We need to set the canvas via javascript because setting it through CSS only scales pixels
	// eslint-disable-next-line no-param-reassign
	canvas.width = canvasWidth;
	// eslint-disable-next-line no-param-reassign
	canvas.height = canvasHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

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

	// Draw horizon
	tracePolygon(
		ctx,
		...getRectangularPlane({
			origin: { x: 0, y: vanishingPoint.y, z: 0 },
			width: canvasWidth,
			height: canvasHeight - vanishingPoint.y,
		}).map((o) => ({ x: o.x, y: o.y })),
	);
	ctx.fillStyle = 'grey';
	ctx.fill();

	return {
		canvas,
		ctx,
		vanishingPoint,
		drawVars,
	};
};

export const composition = pipe(composeDrawings, drawObelisks, drawBuildings);
