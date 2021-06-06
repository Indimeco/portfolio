import { curry } from 'ramda';

import theme from '../../../UI/themes';
import { drawRectangularPrism, getColorFromDepth } from '../../drawing';
import { Drawing } from '../types';

import { obelisks } from './obelisks';

function _percentOf(value: number, percent: number) {
	return Math.round((percent / 100) * value);
}
export const percentOf = curry(_percentOf);

export const drawObelisks: Drawing = (context) => {
	if (!context) return null;
	const { canvas, vanishingPoint, ctx, drawVars } = context;

	const { width: canvasWidth } = canvas.getBoundingClientRect();

	const percentOfMaxDepth = percentOf(drawVars.maximumDepth);
	const percentOfCanvasWidth = percentOf(canvasWidth);

	const dRectangularPrism = drawRectangularPrism(ctx, {
		vanishingPoint,
		observerDistanceFromPicturePlane: drawVars.observerDistanceFromPicturePlane,
	});

	obelisks.forEach(([polygon3D, coordinate3D]) =>
		dRectangularPrism(
			{
				width: percentOfCanvasWidth(polygon3D.width),
				height: polygon3D.height,
				depth: percentOfCanvasWidth(polygon3D.depth),
			},
			{
				x: percentOfCanvasWidth(coordinate3D.x),
				y: drawVars.StreetLevel,
				z: percentOfMaxDepth(coordinate3D.z),
			},
			getColorFromDepth(theme.colors.bg, drawVars.maximumDepth, percentOfMaxDepth(coordinate3D.z)),
		),
	);

	return context;
};
