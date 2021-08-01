import { Coordinate } from './types';

function getCanvasPosition(canvas: HTMLCanvasElement) {
	return Math.round(canvas.parentElement?.offsetTop ?? 0);
}

export function tracePolygon(ctx: CanvasRenderingContext2D, ...coords: Coordinate[]): void {
	if (coords.length <= 0) return;

	const canvasOffsetTop = getCanvasPosition(ctx.canvas);
	const firstCoord = coords[0];

	ctx.beginPath();
	ctx.moveTo(firstCoord.x, firstCoord.y - canvasOffsetTop);
	coords.forEach((coord) => {
		const { x, y } = coord;
		ctx.lineTo(x, y - canvasOffsetTop);
	});
	ctx.closePath();
}
