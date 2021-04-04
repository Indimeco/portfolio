import { curry } from 'ramda';

import { Coordinate } from './types';

function _tracePolygon(ctx: CanvasRenderingContext2D, ...coords: Coordinate[]) {
	if (coords.length <= 0) return;

	ctx.beginPath();
	ctx.moveTo(coords[0].x, coords[0].y);
	coords.forEach(({ x, y }) => {
		ctx.lineTo(x, y);
	});
	ctx.closePath();
}
export const tracePolygon = curry(_tracePolygon);
