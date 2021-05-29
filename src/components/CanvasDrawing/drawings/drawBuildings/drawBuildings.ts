import { pipe } from 'fp-ts/lib/function';

import theme from '../../../UI/themes';
import { drawRectangularPrism, getColorFromDepth, Drawing } from '../../drawing';
import { Landmarks } from '../composition';

import { buildings } from './buildings';
import { ArchitectureVal, Building, BuildingPlan } from './types';

// const percentOf = (value: number) => (percent: number) => Math.round((percent / 100) * value);

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

	const MAX_DEPTH = 20000;
	const OBSERVER_DISTANCE_FROM_PICTURE_PLANE = 1000;

	const dRectangularPrism = drawRectangularPrism(ctx, {
		vanishingPoint,
		observerDistanceFromPicturePlane: OBSERVER_DISTANCE_FROM_PICTURE_PLANE,
	});

	const b = pipe(
		buildings,
		(x) => x.map(constructBuildingWithLandmarks(drawVars)),
		(x) => x.reverse(),
	);

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
			getColorFromDepth(theme.colors.bg, MAX_DEPTH, z),
		),
	);

	return context;
};
