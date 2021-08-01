import theme from '../../../UI/themes';
import { drawRectangularPrism, getColorFromDepth } from '../../drawing';
import { darkPolygonFace, lightPolygonFace } from '../../drawing/coloration';
import { Drawing } from '../types';

import { buildings } from './buildings';

/*
 * colorize the buildings outside of the render loop
 * for a million tiny perf gains
 */
const coloredBuildings = buildings.map((b) => {
	const color = getColorFromDepth(theme.colors.bg, 300000, b.position.z);
	return {
		...b,
		colors: {
			light: lightPolygonFace(color),
			dark: darkPolygonFace(color),
			neutral: color,
		},
	};
});

export const drawBuildings: Drawing = (context) => {
	if (!context) return null;
	const { vanishingPoint, ctx, drawVars } = context;

	// TODO we can bring back the custom landmark buildings, but we have to do it here without mapping all of the buildings for perf reasons
	coloredBuildings.forEach(({ dimensions: { width, height, depth }, position: { x, z }, colors }) =>
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
			colors,
		),
	);

	return context;
};
