import { add, curry } from 'ramda';

import theme from '../../UI/themes';

import { obelisks } from './obelisks';
import { drawRectangularPrism, getColorFromDepth, Coordinate } from '../../CanvasDrawing';

function _percentOf(value: number, percent: number) {
	return Math.round((percent / 100) * value);
}
export const percentOf = curry(_percentOf);

export function drawing(canvas: HTMLCanvasElement, vanishingPointY: number): void {
	const MAX_DEPTH = 100000;
	const OBSERVER_DISTANCE_FROM_PICTURE_PLANE = 1000;
	const HORIZON__Y_OFFSET = 200;

	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	const { width: canvasWidth, height: canvasHeight } = canvas.getBoundingClientRect();
	// We need to set the canvas via javascript because setting it through CSS only scales pixels
	// this might be able to be encapsulated into BackgroundCanvas though
	// eslint-disable-next-line no-param-reassign
	canvas.width = canvasWidth;
	// eslint-disable-next-line no-param-reassign
	canvas.height = canvasHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	const percentOfMaxDepth = percentOf(MAX_DEPTH);
	const percentOfCanvasWidth = percentOf(canvasWidth);
	const percentOfCanvasHeight = percentOf(canvasHeight);

	const vanishingPoint: Coordinate = {
		x: percentOfCanvasWidth(80),
		y: add(vanishingPointY, HORIZON__Y_OFFSET),
	};

	const dRectangularPrism = drawRectangularPrism(ctx, {
		vanishingPoint,
		observerDistanceFromPicturePlane: OBSERVER_DISTANCE_FROM_PICTURE_PLANE,
	});

	// Draw the vanishing point
	// tracePolygon(
	// 	ctx,
	// 	...getRectangularPlane({
	// 		origin: { x: vanishingPoint.x, y: vanishingPoint.y, z: -1 },
	// 		width: 2,
	// 		height: 2,
	// 	}).map((o) => ({ x: o.x, y: o.y })),
	// );
	// ctx.fillStyle = 'red';
	// ctx.fill();

	// Draw sky
	// tracePolygon(
	// 	ctx,
	// 	...getRectangularPlane({
	// 		origin: { x: 0, y: 0, z: 0 },
	// 		width: canvasWidth,
	// 		height: vanishingPoint.y,
	// 	}).map((o) => ({ x: o.x, y: o.y })),
	// );
	// ctx.fillStyle = 'grey';
	// ctx.fill();

	obelisks.forEach(([polygon3D, coordinate3D]) =>
		dRectangularPrism(
			{
				width: percentOfCanvasWidth(polygon3D.width),
				height: percentOfCanvasHeight(polygon3D.height),
				depth: percentOfCanvasWidth(polygon3D.depth),
			},
			{
				x: percentOfCanvasWidth(coordinate3D.x),
				y: percentOfCanvasHeight(coordinate3D.y),
				z: percentOfMaxDepth(coordinate3D.z),
			},
			getColorFromDepth(theme.colors.bg, MAX_DEPTH, percentOfMaxDepth(coordinate3D.z)),
		),
	);
}
