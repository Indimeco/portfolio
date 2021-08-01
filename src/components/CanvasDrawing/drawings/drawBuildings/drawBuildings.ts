import theme from '../../../UI/themes';
import { drawRectangularPrism, getColorFromDepth } from '../../drawing';
import { Drawing } from '../types';

import { buildings } from './buildings';

export const drawBuildings: Drawing = (context) => {
	if (!context) return null;
	const { vanishingPoint, ctx, drawVars } = context;

	// TODO we can bring back the custom landmark buildings, but we have to do it here without mapping all of the buildings for perf reasons
	buildings.forEach(({ dimensions: { width, height, depth }, position: { x, z } }) =>
		drawRectangularPrism(
			ctx,
			{
				vanishingPoint,
				observerDistanceFromPicturePlane: drawVars.observerDistanceFromPicturePlane,
			},
			{
				width,
				height,
				depth,
			},
			{
				x,
				y: drawVars.StreetLevel,
				z,
			},
			getColorFromDepth(theme.colors.bg, drawVars.maximumDepth, z),
		),
	);

	return context;
};
