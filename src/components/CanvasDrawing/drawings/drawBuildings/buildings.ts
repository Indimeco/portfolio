import { BuildingPlan } from './types';

export const buildings: BuildingPlan[] = [
	{
		// stand on this building
		dimensions: {
			width: 400,
			height: (landmarks) => landmarks.StreetLevel - landmarks.TitleLevel,
			depth: 500,
		},
		position: {
			x: -60,
			z: -600,
		},
	},
	{
		// left receding
		dimensions: {
			width: 500,
			height: 3000,
			depth: 500,
		},
		position: {
			x: -90,
			z: 900,
		},
	},
];
