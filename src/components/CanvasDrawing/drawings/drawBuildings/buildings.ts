import { BuildingPlan } from './types';

const leftAvenue: BuildingPlan[] = [
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
		// large left cover
		dimensions: {
			width: 400,
			height: 3000,
			depth: 3900,
		},
		position: {
			x: -60,
			z: 100,
		},
	},
];

const rightAvenue: BuildingPlan[] = [
	{
		dimensions: {
			width: 400,
			height: 800,
			depth: 4000,
		},
		position: {
			x: 1200,
			z: 0,
		},
	},
];

const centralAvenue: BuildingPlan[] = [
	{
		dimensions: {
			width: 800,
			height: 2000,
			depth: 500,
		},
		position: {
			x: 0,
			z: 4400,
		},
	},
	{
		dimensions: {
			width: 400,
			height: 1400,
			depth: 500,
		},
		position: {
			x: 1200,
			z: 4400,
		},
	},
];

const backdrop: BuildingPlan[] = [];

export const buildings: BuildingPlan[] = [...leftAvenue, ...rightAvenue, ...centralAvenue, ...backdrop];
