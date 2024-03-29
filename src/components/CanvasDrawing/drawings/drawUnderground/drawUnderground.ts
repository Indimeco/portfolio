import theme from '../../../UI/themes';
import { tracePolygon, getRectangularPlane } from '../../drawing';
import { Drawing } from '../types';

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
	ctx.fillStyle = theme.colors.auxAccent;
	ctx.fill();

	return context;
};
