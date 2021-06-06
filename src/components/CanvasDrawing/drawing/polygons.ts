import { curry } from 'ramda';

import { Coordinate } from './types';

function withoutSubpixelRendering(coord: Coordinate): Coordinate {
	return { x: Math.round(coord.x), y: Math.round(coord.y) };
}

function _tracePolygon(ctx: CanvasRenderingContext2D, ...coords: Coordinate[]) {
	if (coords.length <= 0) return;

	const firstCoord = withoutSubpixelRendering(coords[0]);

	ctx.beginPath();
	ctx.moveTo(firstCoord.x, firstCoord.y);
	coords.forEach((coord) => {
		const { x, y } = withoutSubpixelRendering(coord);
		ctx.lineTo(x, y);
	});
	ctx.closePath();
}
export const tracePolygon = curry(_tracePolygon);
