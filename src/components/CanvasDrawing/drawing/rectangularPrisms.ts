import { PicturePlane, Polygon3D, Coordinate3D, Coordinate } from './types';
import { tracePolygon } from './polygons';
import { convert3DCoordinateToPicturePlane, c2XIs, c2YIs } from './coordinates';
import { darkPolygonFace, lightPolygonFace } from './coloration';

function positiveOrZero(num: number) {
	return num > 0 ? num : 0;
}

export function getRectangularPlane({
	origin,
	width,
	height,
}: {
	origin: Coordinate3D;
	width: number;
	height: number;
}): Coordinate3D[] {
	const destination = {
		x: origin.x + positiveOrZero(width),
		y: origin.y - positiveOrZero(height),
	};
	return [
		{ x: origin.x, y: origin.y, z: origin.z },
		{ x: destination.x, y: origin.y, z: origin.z },
		{ x: destination.x, y: destination.y, z: origin.z },
		{ x: origin.x, y: destination.y, z: origin.z },
	];
}

function drawRectangularPlane(ctx: CanvasRenderingContext2D, coordinates: Coordinate[], color: string) {
	tracePolygon(ctx, ...coordinates);
	ctx.fillStyle = color;
	ctx.fill();
}

function isFaceOnCanvas(ctx: CanvasRenderingContext2D, face: Coordinate[]) {
	return face.some((c) => c.x >= 0 && c.x <= ctx.canvas.width);
}

type FaceColors = {
	light: string;
	dark: string;
	neutral: string;
};
export function drawRectangularPrism(
	ctx: CanvasRenderingContext2D,
	{ vanishingPoint, observerDistanceFromPicturePlane }: PicturePlane,
	{ width, depth, height }: Polygon3D,
	origin: Coordinate3D,
	{ light, dark, neutral }: FaceColors,
): void {
	// draw front face
	const p1 = getRectangularPlane({
		origin: { x: origin.x, y: origin.y, z: origin.z },
		width,
		height,
	}).map((o) => convert3DCoordinateToPicturePlane(vanishingPoint, observerDistanceFromPicturePlane, o));
	// get back face coordinates
	const p2 = getRectangularPlane({
		origin: { x: origin.x, y: origin.y, z: origin.z + depth },
		width,
		height,
	}).map((o) => convert3DCoordinateToPicturePlane(vanishingPoint, observerDistanceFromPicturePlane, o));

	// if the front or back face isn't on the canvas then we dump the shape for perf
	if (!isFaceOnCanvas(ctx, p1) && !isFaceOnCanvas(ctx, p2)) {
		return;
	}

	drawRectangularPlane(ctx, p1, neutral);

	const [p1TopLeft, p1TopRight, p1BottomRight, p1BottomLeft] = p1;
	const [p2TopLeft, p2TopRight, p2BottomRight, p2BottomLeft] = p2;

	// draw bottom face
	if (c2YIs(p1TopLeft, vanishingPoint) === 'below') {
		drawRectangularPlane(ctx, [p1TopRight, p2TopRight, p2TopLeft, p1TopLeft], dark);
	}
	// draw top face
	if (c2YIs(p1BottomLeft, vanishingPoint) === 'above') {
		drawRectangularPlane(ctx, [p1BottomLeft, p1BottomRight, p2BottomRight, p2BottomLeft], light);
	}
	// draw left face
	if (c2XIs(p1BottomLeft, vanishingPoint) === 'left') {
		drawRectangularPlane(ctx, [p1TopLeft, p2TopLeft, p2BottomLeft, p1BottomLeft], dark);
	}
	// draw right face
	if (c2XIs(p1TopRight, vanishingPoint) === 'right') {
		drawRectangularPlane(ctx, [p1TopRight, p2TopRight, p2BottomRight, p1BottomRight], dark);
	}
}
