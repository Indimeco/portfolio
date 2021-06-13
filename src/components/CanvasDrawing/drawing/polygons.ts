import { curry } from 'ramda';

import { Coordinate } from './types';

function withoutSubpixelRendering(coord: Coordinate): Coordinate {
	return { x: Math.round(coord.x), y: Math.round(coord.y) };
}

function getCanvasPosition(canvas: HTMLCanvasElement) {
	return Math.round(canvas.parentElement?.offsetTop ?? 0);
}

function _tracePolygon(ctx: CanvasRenderingContext2D, ...coords: Coordinate[]) {
	if (coords.length <= 0) return;

	const canvasOffsetTop = getCanvasPosition(ctx.canvas);
	const firstCoord = withoutSubpixelRendering(coords[0]);

	ctx.beginPath();
	ctx.moveTo(firstCoord.x, firstCoord.y - canvasOffsetTop);
	coords.forEach((coord) => {
		const { x, y } = withoutSubpixelRendering(coord);
		ctx.lineTo(x, y - canvasOffsetTop);
	});
	ctx.closePath();
}
export const tracePolygon = curry(_tracePolygon);
