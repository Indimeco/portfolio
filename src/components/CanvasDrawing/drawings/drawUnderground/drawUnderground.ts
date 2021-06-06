import { Drawing, tracePolygon, getRectangularPlane } from '../../drawing';

export const drawUnderground: Drawing = (context) => {
	if (!context) return null;
	const { vanishingPoint, ctx, drawVars } = context;

	// Draw horizon
	tracePolygon(
		ctx,
		...getRectangularPlane({
			origin: { x: 0, y: vanishingPoint.y, z: 0 },
			width: ctx.canvas.width,
			height: vanishingPoint.y - drawVars.StreetLevel,
		}).map((o) => ({ x: o.x, y: o.y })),
	);
	ctx.fillStyle = 'black';
	ctx.fill();

	return context;
};
