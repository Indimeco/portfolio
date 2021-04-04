import { curry } from 'ramda';

import { PicturePlane, Polygon3D, Coordinate3D } from './types';
import { tracePolygon } from './polygons';
import { convert3DCoordinateToPicturePlane, c2XIs, c2YIs } from './coordinates';
import { darkPolygonFace, lightPolygonFace } from './coloration';

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
const getRectangularPlane = curry(_getRectangularPlane);

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
		ctx.fillStyle = lightPolygonFace(color);
		ctx.fill();
	}
	// draw bottom face
	if (c2YIs(p1BottomLeft, vanishingPoint) === 'below') {
		tracePolygon(ctx, p1BottomLeft, p1BottomRight, p2BottomRight, p2BottomLeft);
		ctx.fillStyle = darkPolygonFace(color);
		ctx.fill();
	}

	// draw left face
	if (c2XIs(p1BottomLeft, vanishingPoint) === 'left') {
		tracePolygon(ctx, p1TopLeft, p2TopLeft, p2BottomLeft, p1BottomLeft);
		ctx.fillStyle = darkPolygonFace(color);
		ctx.fill();
	}

	// draw right face
	if (c2XIs(p1TopRight, vanishingPoint) === 'right') {
		tracePolygon(ctx, p1TopRight, p2TopRight, p2BottomRight, p1BottomRight);
		ctx.fillStyle = darkPolygonFace(color);
		ctx.fill();
	}
}
export const drawRectangularPrism = curry(_drawRectangularPrism);
