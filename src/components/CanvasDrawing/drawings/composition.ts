import { flow } from 'fp-ts/function';

import { Coordinate, tracePolygon, getRectangularPlane } from '../drawing';
import theme from '../../UI/themes';

import { DrawingSetup } from './types';
import { drawBuildings } from './drawBuildings';
import { drawUnderground } from './drawUnderground';

export const composeDrawings: DrawingSetup = (canvas, landmarks) => {
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

	// Draw the vanishing point
	ctx.globalAlpha = 0.2;
	ctx.beginPath();
	ctx.arc(vanishingPoint.x, vanishingPoint.y + 40, 80, 0, 2 * Math.PI);
	const grad = ctx.createRadialGradient(
		vanishingPoint.x,
		vanishingPoint.y,
		1,
		vanishingPoint.x,
		vanishingPoint.y,
		40,
	);
	grad.addColorStop(0.1, theme.colors.fg);
	grad.addColorStop(0.99, theme.colors.bgAccent);
	ctx.fillStyle = grad;
	ctx.fill();
	ctx.globalAlpha = 1;

	// Draw horizon
	tracePolygon(
		ctx,
		...getRectangularPlane({
			origin: { x: 0, y: canvasHeight, z: 0 },
			width: canvasWidth,
			height: canvasHeight - HORIZON_Y_OFFSET,
		}).map((o) => ({ x: o.x, y: o.y })),
	);
	ctx.fillStyle = theme.colors.bgShadow;
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

export const composition = flow(composeDrawings, drawBuildings, drawUnderground);
