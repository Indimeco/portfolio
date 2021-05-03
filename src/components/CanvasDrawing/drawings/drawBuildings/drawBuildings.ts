import { curry } from 'ramda';

import theme from '../../../UI/themes';
import { drawRectangularPrism, getColorFromDepth, Drawing } from '../../drawing';

import { buildings } from './buildings';

function _percentOf(value: number, percent: number) {
	return Math.round((percent / 100) * value);
}
export const percentOf = curry(_percentOf);

export const drawBuildings: Drawing = (context) => {
	if (!context) return null;
	const { vanishingPoint, ctx, drawVars } = context;

	const MAX_DEPTH = 100000;
	const OBSERVER_DISTANCE_FROM_PICTURE_PLANE = 1000;

	const dRectangularPrism = drawRectangularPrism(ctx, {
		vanishingPoint,
		observerDistanceFromPicturePlane: OBSERVER_DISTANCE_FROM_PICTURE_PLANE,
	});

	buildings.forEach(([polygon3D, coordinate3D]) =>
		dRectangularPrism(
			{
				width: polygon3D.width,
				height: polygon3D.height,
				depth: polygon3D.depth,
			},
			{
				x: coordinate3D.x,
				y: drawVars.StreetLevel,
				z: coordinate3D.z,
			},
			getColorFromDepth(theme.colors.bg, MAX_DEPTH, coordinate3D.z),
		),
	);

	// stand on this building
	dRectangularPrism(
		{
			width: 400,
			height: drawVars.StreetLevel - drawVars.TitleLevel,
			depth: 500,
		},
		{
			x: -60,
			y: drawVars.StreetLevel,
			z: -600,
		},
		getColorFromDepth(theme.colors.bg, MAX_DEPTH, 0),
	);
	return context;
};
