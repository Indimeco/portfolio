import theme from '../../../UI/themes';
import { drawRectangularPrism, getColorFromDepth } from '../../drawing';
import { Drawing } from '../types';

import { buildings } from './buildings';

export const drawBuildings: Drawing = (context) => {
	if (!context) return null;
	const { vanishingPoint, ctx, drawVars } = context;

	buildings.forEach(({ dimensions: { width, height, depth }, position: { x, z } }) =>
		drawRectangularPrism(
			ctx,
			{
				vanishingPoint,
				observerDistanceFromPicturePlane: drawVars.observerDistanceFromPicturePlane,
			},
			{
				// @ts-ignore
				width,
				// @ts-ignore
				height,
				// @ts-ignore
				depth,
			},
			{
				x,
				y: drawVars.StreetLevel,
				z,
			},
			// @ts-ignore
			getColorFromDepth(theme.colors.bg, drawVars.maximumDepth, z),
		),
	);

	return context;
};
