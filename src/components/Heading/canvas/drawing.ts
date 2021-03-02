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
	origin: Coordinate;
	width: number;
	height: number;
	color?: string;
};
type Polygon3D = Polygon & { origin: Coordinate3D; depth: number; vanishingPoint: Coordinate };
const tracePolygon = (ctx: CanvasRenderingContext2D, ...coords: Coordinate[]) => {
	if (coords.length <= 0) return;

	ctx.beginPath();
	ctx.moveTo(coords[0].x, coords[0].y);
	coords.forEach(({ x, y }) => {
		ctx.lineTo(x, y);
	});
	ctx.closePath();
};
const drawRectangularPlane = (
	ctx: CanvasRenderingContext2D,
	{ origin, width, height, color = 'pink' }: Polygon,
) => {
	const destination = {
		x: origin.x + width,
		y: origin.y + height,
	};

	tracePolygon(
		ctx,
		{ x: origin.x, y: origin.y },
		{ x: destination.x, y: origin.y },
		{ x: destination.x, y: destination.y },
		{ x: origin.x, y: destination.y },
		{ x: origin.x, y: origin.y },
	);

	ctx.strokeStyle = color;
	ctx.stroke();
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
// This formula i got from https://math.stackexchange.com/questions/2337183/one-point-perspective-formula doesn't seem to be correct
// a point scaled at 0, 0 to a vanishing point at 450 becomes 0, 0
const scaleCoordinate = (
	origin: Coordinate3D,
	vanishingPoint: Coordinate,
	observerDepth = -30,
): Coordinate => {
	const scaled = {
		x: vanishingPoint.x + (origin.x - vanishingPoint.x) * (observerDepth / (observerDepth + origin.z)),
		y: vanishingPoint.y + (origin.y - vanishingPoint.y) * (observerDepth / (observerDepth + origin.z)),
	};
	console.log('Origin: ', origin);
	console.log('Scaled: ', scaled);
	return scaled;
};

// Assuming that the picture plane is located at (0,0,0) in 3D space
function convert3DCoordinateToPicturePlane(coordinate: Coordinate3D): Coordinate {
	const distanceFromObserverToPicturePlane = 10;
	return {
		x:
			(distanceFromObserverToPicturePlane * coordinate.x) /
			(coordinate.z + distanceFromObserverToPicturePlane),
		y:
			(distanceFromObserverToPicturePlane * coordinate.y) /
			(coordinate.z + distanceFromObserverToPicturePlane),
	};
}
const drawRectangularPrism = (
	ctx: CanvasRenderingContext2D,
	{ origin, width, height, depth, vanishingPoint }: Polygon3D,
) => {
	tracePolygon(
		ctx,
		...getRectangularPlane({ origin: { x: 100, y: 200, z: 0 }, width: 100, height: 200 }).map(
			convert3DCoordinateToPicturePlane,
		),
	);
	ctx.strokeStyle = 'yellow';
	ctx.stroke();
	drawRectangularPlane(ctx, { origin, width, height, color: 'blue' });
	drawRectangularPlane(ctx, {
		origin: scaleCoordinate(origin, vanishingPoint),
		width: width - depth,
		height: height - depth,
		color: 'green',
	});
};

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
	const vanishingPoint: Coordinate = { x: canvas.width / 2, y: canvas.height / 2 };
	console.group();
	console.log('Canvas Width: ', canvas.width);
	console.log('Canvas Height: ', canvas.height);
	console.log('Vanishing Point: ', vanishingPoint);
	console.groupEnd();

	drawRectangularPrism(ctx, {
		origin: { x: 0, y: 0, z: 0 },
		width: 100,
		height: 300,
		depth: 30,
		vanishingPoint,
		color: 'yellow',
	});
}
