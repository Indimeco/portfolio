import { pipe } from 'fp-ts/lib/function';

import theme from '../../../UI/themes';
import { drawRectangularPrism, getColorFromDepth } from '../../drawing';
import { Landmarks, Drawing } from '../types';

import { buildings } from './buildings';
import { ArchitectureVal, Building, BuildingPlan } from './types';

const constructArchitectureVal = (landmarks: Landmarks, value: ArchitectureVal): number =>
	typeof value === 'function' ? value(landmarks) : value;

const constructBuildingWithLandmarks = (landmarks: Landmarks) => (building: BuildingPlan): Building => ({
	dimensions: {
		width: constructArchitectureVal(landmarks, building.dimensions.width),
		height: constructArchitectureVal(landmarks, building.dimensions.height),
		depth: constructArchitectureVal(landmarks, building.dimensions.depth),
	},
	position: {
		x: constructArchitectureVal(landmarks, building.position.x),
		z: constructArchitectureVal(landmarks, building.position.z),
	},
});

export const drawBuildings: Drawing = (context) => {
	if (!context) return null;
	const { vanishingPoint, ctx, drawVars } = context;

	const dRectangularPrism = drawRectangularPrism(ctx, {
		vanishingPoint,
		observerDistanceFromPicturePlane: drawVars.observerDistanceFromPicturePlane,
	});

	pipe(
		buildings,
		(b) => b.map(constructBuildingWithLandmarks(drawVars)),
		(b) => b.reverse(),
		(b) =>
			b.forEach(({ dimensions: { width, height, depth }, position: { x, z } }) =>
				dRectangularPrism(
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
			),
	);

	return context;
};
