import { darken, lighten } from 'polished';
import { curry } from 'ramda';

import theme from '../../UI/themes';

type Coordinate = { x: number; y: number };
type Coordinate3D = Coordinate & { z: number };
type Polygon = {
	width: number;
	height: number;
	color: string;
};
type Polygon3D = Polygon & { depth: number };
type PicturePlane = {
	vanishingPoint: Coordinate;
	observerDistanceFromPicturePlane: number;
};
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
	{ width, depth, height, color }: Polygon3D,
	origin: Coordinate3D,
) {
	const p1 = getRectangularPlane({
		origin: { x: origin.x, y: origin.y, z: origin.z },
		width,
		height,
	}).map((o) => convert3DCoordinateToPicturePlane(vanishingPoint, observerDistanceFromPicturePlane, o));

	const p2 = getRectangularPlane({
		origin: { x: origin.x, y: origin.y, z: origin.z + depth },
		width,
		height,
	}).map((o) => convert3DCoordinateToPicturePlane(vanishingPoint, observerDistanceFromPicturePlane, o));

	tracePolygon(ctx, ...p1);
	ctx.fillStyle = color;
	ctx.fill();

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

export function drawing(canvas: HTMLCanvasElement): void {
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

	const maxDepth = 100000;
	const percentOfMaxDepth = percentOf(maxDepth);
	const percentOfCanvasWidth = percentOf(canvasWidth);
	const percentOfCanvasHeight = percentOf(canvasHeight);

	const vanishingPoint: Coordinate = { x: percentOfCanvasWidth(80), y: percentOfCanvasHeight(20) };
	const observerDistanceFromPicturePlane = 1000;

	const dRectangularPrism = drawRectangularPrism(ctx, {
		vanishingPoint,
		observerDistanceFromPicturePlane,
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

	// left receding
	dRectangularPrism(
		{
			width: percentOfCanvasWidth(50),
			height: percentOfCanvasHeight(300),
			depth: percentOfCanvasWidth(30),
			color: getColorFromDepth(theme.colors.bg, maxDepth, percentOfMaxDepth(6)),
		},
		{ x: percentOfCanvasWidth(0), y: percentOfCanvasHeight(0), z: percentOfMaxDepth(6) },
	);

	// small right middle
	dRectangularPrism(
		{
			width: percentOfCanvasWidth(30),
			height: percentOfCanvasHeight(300),
			depth: percentOfCanvasWidth(30),
			color: getColorFromDepth(theme.colors.bg, maxDepth, percentOfMaxDepth(2)),
		},
		{ x: percentOfCanvasWidth(80), y: percentOfCanvasHeight(40), z: percentOfMaxDepth(2) },
	);

	// left center tall
	dRectangularPrism(
		{
			width: percentOfCanvasWidth(50),
			height: percentOfCanvasHeight(300),
			depth: percentOfCanvasWidth(30),
			color: getColorFromDepth(theme.colors.bg, maxDepth, percentOfMaxDepth(1)),
		},
		{ x: percentOfCanvasWidth(2), y: percentOfCanvasHeight(0), z: percentOfMaxDepth(1) },
	);

	// middle cover
	dRectangularPrism(
		{
			width: percentOfCanvasWidth(40),
			height: percentOfCanvasHeight(300),
			depth: percentOfCanvasWidth(40),
			color: getColorFromDepth(theme.colors.bg, maxDepth, percentOfMaxDepth(0.8)),
		},
		{ x: percentOfCanvasWidth(40), y: percentOfCanvasHeight(40), z: percentOfMaxDepth(0.8) },
	);

	// left centre medium tall
	dRectangularPrism(
		{
			width: percentOfCanvasWidth(24),
			height: percentOfCanvasHeight(300),
			depth: percentOfCanvasWidth(40),
			color: getColorFromDepth(theme.colors.bg, maxDepth, percentOfMaxDepth(0.4)),
		},
		{ x: percentOfCanvasWidth(2), y: percentOfCanvasHeight(33), z: percentOfMaxDepth(0.4) },
	);

	// left centre medium
	dRectangularPrism(
		{
			width: percentOfCanvasWidth(30),
			height: percentOfCanvasHeight(300),
			depth: percentOfCanvasWidth(40),
			color: getColorFromDepth(theme.colors.bg, maxDepth, percentOfMaxDepth(0.2)),
		},
		{ x: percentOfCanvasWidth(10), y: percentOfCanvasHeight(60), z: percentOfMaxDepth(0.2) },
	);

	// left tall edge
	dRectangularPrism(
		{
			width: percentOfCanvasWidth(25),
			height: percentOfCanvasHeight(300),
			depth: percentOfCanvasWidth(23),
			color: getColorFromDepth(theme.colors.bg, maxDepth, percentOfMaxDepth(0.1)),
		},
		{ x: percentOfCanvasWidth(-20), y: percentOfCanvasHeight(5), z: percentOfMaxDepth(0.1) },
	);

	// medium right edge
	dRectangularPrism(
		{
			width: percentOfCanvasWidth(20),
			height: percentOfCanvasHeight(300),
			depth: percentOfCanvasWidth(30),
			color: getColorFromDepth(theme.colors.bg, maxDepth, percentOfMaxDepth(0.1)),
		},
		{ x: percentOfCanvasWidth(90), y: percentOfCanvasHeight(20), z: percentOfMaxDepth(0.1) },
	);

	// small right edge
	dRectangularPrism(
		{
			width: percentOfCanvasWidth(40),
			height: percentOfCanvasHeight(300),
			depth: percentOfCanvasWidth(40),
			color: getColorFromDepth(theme.colors.bg, maxDepth, percentOfMaxDepth(0.1)),
		},
		{ x: percentOfCanvasWidth(70), y: percentOfCanvasHeight(80), z: percentOfMaxDepth(0.1) },
	);

	// left edge short corner
	dRectangularPrism(
		{
			width: percentOfCanvasWidth(40),
			height: percentOfCanvasHeight(300),
			depth: percentOfCanvasWidth(40),
			color: getColorFromDepth(theme.colors.bg, maxDepth, percentOfMaxDepth(0)),
		},
		{ x: percentOfCanvasWidth(-30), y: percentOfCanvasHeight(92), z: percentOfMaxDepth(0) },
	);
}
