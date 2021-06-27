import { BuildingPlan, BuildingPlanPosition } from './types';

const leftBlockStart = -300;
const avenueWidth = 1200;
const rightBlockStart = leftBlockStart + avenueWidth;
const centralAvenueStart = leftBlockStart + avenueWidth / 2;

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive

const generateBuilding = (position: BuildingPlanPosition): BuildingPlan => ({
	dimensions: {
		width: getRandomInt(400, 900),
		height: getRandomInt(3000, 800),
		depth: getRandomInt(400, 900),
	},
	position,
});

// TODO this should create parallel buildings, but at the moment is messy
// must be switchable between generating x and z blocks
const generateBlock = (
	start: BuildingPlanPosition,
	end: BuildingPlanPosition,
	buildings?: BuildingPlan[],
): BuildingPlan[] => {
	const b = generateBuilding(start);
	const blockBuildings = [...(buildings || []), b];
	if (b.position.x >= end.x || b.position.z >= end.z) {
		return blockBuildings;
	}
	return generateBlock(
		{
			x: start.x,
			z: (b.position.z as number) + (b.dimensions.depth as number) + getRandomInt(300, 500),
		},
		end,
		blockBuildings,
	);
};

const rightBlock: BuildingPlan[] = [
	{
		dimensions: {
			width: 400,
			height: (landmarks) => landmarks.StreetLevel - landmarks.TitleLevel,
			depth: 500,
		},
		position: {
			x: rightBlockStart,
			z: -600,
		},
	},
	{
		dimensions: {
			width: 400,
			height: 3000,
			depth: 800,
		},
		position: {
			x: rightBlockStart,
			z: 100,
		},
	},
];

const leftBlock: BuildingPlan[] = [
	{
		dimensions: {
			width: 400,
			height: 800,
			depth: 4000,
		},
		position: {
			x: leftBlockStart,
			z: 0,
		},
	},
	...generateBlock({ x: leftBlockStart, z: 4500 }, { x: 9999, z: 9999 }),
];

const centralAvenueLeft: BuildingPlan[] = [
	{
		dimensions: {
			width: 400,
			height: 1400,
			depth: 500,
		},
		position: {
			x: centralAvenueStart,
			z: 4400,
		},
	},
];

const centralAvenueRight: BuildingPlan[] = [
	{
		dimensions: {
			width: 400,
			height: 1400,
			depth: 500,
		},
		position: {
			x: centralAvenueStart + avenueWidth,
			z: 4400,
		},
	},
];

const backdrop: BuildingPlan[] = [];

export const buildings: BuildingPlan[] = [
	...rightBlock,
	...leftBlock,
	...centralAvenueLeft,
	...centralAvenueRight,
	...backdrop,
];
