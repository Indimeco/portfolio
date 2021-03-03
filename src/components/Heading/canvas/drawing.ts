// NOTES FOR WIP
/**
 *
 * Update 20210303
 * I have studied the math and it seems the correct approach would actually be to pretend that I have objects in 3d space
 * and then discern how they are projected onto the 2d picture plane (the canvas) rather than trying to use the
 * 2d picture plane to emulate 3d objects with
 * I have rewritten the rectangular plane function to produce an array of coordinates which can be then converted to a picture plane projection
 * however I will need to do more work to create a better separation between 3d objects and their picture plane representation
 *
 * Update 20210207
 * I started this by drawing rectangular faces and then thinking about connecting them,
 * but I need to actually just draw the raw polygons themselves, not full rectangles.
 * https://codepen.io/AshKyd/pen/JYXEpL
 * Should do this by using the tracePolygon func I've just outlined,
 * but I need to be able to scale the original points given with two factors in mind:
 * first the depth specified and second the vanishing point.
 * I don't know what the relationship between these two factors should be at the moment,
 * but I will need to use them to generate new coordinate sets.
 *
 */
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
const tracePolygon = (ctx: CanvasRenderingContext2D, ...coords: Coordinate[]) => {
	if (coords.length <= 0) return;

	ctx.beginPath();
	ctx.moveTo(coords[0].x, coords[0].y);
	coords.forEach(({ x, y }) => {
		ctx.lineTo(x, y);
	});
	ctx.closePath();
};
function getRectangularPlane({
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
		{ x: origin.x, y: origin.y, z: origin.z },
	];
}

function convert3DCoordinateToPicturePlane(
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
function drawRectangularPrism(
	ctx: CanvasRenderingContext2D,
	{ vanishingPoint, observerDistanceFromPicturePlane }: PicturePlane,
	{ width, depth, height, color }: Polygon3D,
	origin: Coordinate3D,
) {
	// NOTE should curry many of these functions

	tracePolygon(
		ctx,
		...getRectangularPlane({ origin: { x: origin.x, y: origin.y, z: origin.z }, width, height }).map((o) =>
			convert3DCoordinateToPicturePlane(vanishingPoint, observerDistanceFromPicturePlane, o),
		),
	);
	ctx.strokeStyle = color;
	ctx.stroke();
	tracePolygon(
		ctx,
		...getRectangularPlane({
			origin: { x: origin.x, y: origin.y, z: origin.z + depth },
			width,
			height,
		}).map((o) => convert3DCoordinateToPicturePlane(vanishingPoint, observerDistanceFromPicturePlane, o)),
	);
	ctx.strokeStyle = color;
	ctx.stroke();
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
	const vanishingPoint: Coordinate = { x: canvas.width - canvas.width / 4, y: canvas.height / 4 };
	const observerDistanceFromPicturePlane = 1000;
	console.group();
	console.log('Canvas Width: ', canvas.width);
	console.log('Canvas Height: ', canvas.height);
	console.log('Vanishing Point: ', vanishingPoint);
	console.groupEnd();

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

	drawRectangularPrism(
		ctx,
		{
			vanishingPoint,
			observerDistanceFromPicturePlane,
		},
		{
			width: 100,
			height: 200,
			depth: 100,
			color: 'yellow',
		},
		{ x: 0, y: 0, z: 0 },
	);
}
