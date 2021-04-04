import { darken, lighten } from 'polished';
import { add, curry } from 'ramda';

import theme from '../../UI/themes';

import { buildings } from './buildings';
// import { obelisks as buildings } from './obelisks';
import { PicturePlane, Coordinate, Coordinate3D, Polygon3D } from './types';

function _tracePolygon(ctx: CanvasRenderingContext2D, ...coords: Coordinate[]) {
	if (coords.length <= 0) return;

	ctx.beginPath();
	ctx.moveTo(coords[0].x, coords[0].y);
	coords.forEach(({ x, y }) => {
		ctx.lineTo(x, y);
	});
	ctx.closePath();
}
const tracePolygon = curry(_tracePolygon);

function _getRectangularPlane({
	origin,
	width,
	height,
}: {
	origin: Coordinate3D;
	width: number;
	height: number;
}): Coordinate3D[] {
	const destination = {
		x: origin.x + width,
		y: origin.y + height,
	};
	return [
		{ x: origin.x, y: origin.y, z: origin.z },
		{ x: destination.x, y: origin.y, z: origin.z },
		{ x: destination.x, y: destination.y, z: origin.z },
		{ x: origin.x, y: destination.y, z: origin.z },
	];
}
export const getRectangularPlane = curry(_getRectangularPlane);

function _convert3DCoordinateToPicturePlane(
	vanishingPoint: Coordinate,
	observerDistanceFromPicturePlane: number,
	coordinate: Coordinate3D,
): Coordinate {
	return {
		x:
			vanishingPoint.x +
			(coordinate.x - vanishingPoint.x) *
				(observerDistanceFromPicturePlane / (observerDistanceFromPicturePlane + coordinate.z)),
		y:
			vanishingPoint.y +
			(coordinate.y - vanishingPoint.y) *
				(observerDistanceFromPicturePlane / (observerDistanceFromPicturePlane + coordinate.z)),
	};
}
const convert3DCoordinateToPicturePlane = curry(_convert3DCoordinateToPicturePlane);

type CoordinateRelationX = 'left' | 'right' | 'same';
type CoordinateRelationY = 'above' | 'below' | 'same';
export function c2XIs(c1: Coordinate, c2: Coordinate): CoordinateRelationX {
	if (c2.x > c1.x) return 'right';
	if (c2.x === c1.x) return 'same';
	return 'left';
}
export function c2YIs(c1: Coordinate, c2: Coordinate): CoordinateRelationY {
	if (c2.y > c1.y) return 'below';
	if (c2.y === c1.y) return 'same';
	return 'above';
}

function _drawRectangularPrism(
	ctx: CanvasRenderingContext2D,
	{ vanishingPoint, observerDistanceFromPicturePlane }: PicturePlane,
	{ width, depth, height }: Polygon3D,
	origin: Coordinate3D,
	color: string,
) {
	const p1 = getRectangularPlane({
		origin: { x: origin.x, y: origin.y, z: origin.z },
		width,
		height,
	}).map((o) => convert3DCoordinateToPicturePlane(vanishingPoint, observerDistanceFromPicturePlane, o));
	tracePolygon(ctx, ...p1);
	ctx.fillStyle = color;
	ctx.fill();

	const p2 = getRectangularPlane({
		origin: { x: origin.x, y: origin.y, z: origin.z + depth },
		width,
		height,
	}).map((o) => convert3DCoordinateToPicturePlane(vanishingPoint, observerDistanceFromPicturePlane, o));
	const [p1TopLeft, p1TopRight, p1BottomRight, p1BottomLeft] = p1;
	const [p2TopLeft, p2TopRight, p2BottomRight, p2BottomLeft] = p2;

	// draw top face
	if (c2YIs(p1TopLeft, vanishingPoint) === 'above') {
		tracePolygon(ctx, p1TopRight, p2TopRight, p2TopLeft, p1TopLeft);
		ctx.fillStyle = lighten(0.1, color);
		ctx.fill();
	}
	// draw bottom face
	if (c2YIs(p1BottomLeft, vanishingPoint) === 'below') {
		tracePolygon(ctx, p1BottomLeft, p1BottomRight, p2BottomRight, p2BottomLeft);
		ctx.fillStyle = darken(0.1, color);
		ctx.fill();
	}

	// draw left face
	if (c2XIs(p1BottomLeft, vanishingPoint) === 'left') {
		tracePolygon(ctx, p1TopLeft, p2TopLeft, p2BottomLeft, p1BottomLeft);
		ctx.fillStyle = darken(0.1, color);
		ctx.fill();
	}

	// draw right face
	if (c2XIs(p1TopRight, vanishingPoint) === 'right') {
		tracePolygon(ctx, p1TopRight, p2TopRight, p2BottomRight, p1BottomRight);
		ctx.fillStyle = darken(0.1, color);
		ctx.fill();
	}
}
const drawRectangularPrism = curry(_drawRectangularPrism);

function _percentOf(value: number, percent: number) {
	return Math.round((percent / 100) * value);
}
export const percentOf = curry(_percentOf);

function getColorFromDepth(color: string, maxDepth: number, depth: number) {
	return lighten(depth / maxDepth, color);
}

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

	// Draw sky
	tracePolygon(
		ctx,
		...getRectangularPlane({
			origin: { x: 0, y: 0, z: 0 },
			width: canvasWidth,
			height: vanishingPoint.y,
		}).map((o) => ({ x: o.x, y: o.y })),
	);
	ctx.fillStyle = 'grey';
	ctx.fill();

	buildings.forEach(([polygon3D, coordinate3D]) =>
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
