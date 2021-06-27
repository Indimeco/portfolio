import { BuildingPlan, BuildingPlanPosition } from './types';

const leftBlockStart = -300;
const avenueWidth = 1200;
const rightBlockStart = leftBlockStart + avenueWidth;
const centralAvenueStart = leftBlockStart + avenueWidth / 2;

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive

const generateBuilding = (position: BuildingPlanPosition): BuildingPlan => ({
	dimensions: {
		width: getRandomInt(400, 3000),
		height: getRandomInt(800, 3000),
		depth: getRandomInt(400, 3000),
	},
	position,
});

const generateBlock = (
	start: BuildingPlanPosition,
	end: {
		untilX?: number;
		untilZ?: number;
	},
	buildings?: BuildingPlan[],
): BuildingPlan[] => {
	const b = generateBuilding(start);
	const blockBuildings = [...(buildings || []), b];
	if (
		(typeof end.untilX === 'number' && b.position.x >= end.untilX) ||
		(typeof end.untilZ === 'number' && b.position.z >= end.untilZ)
	) {
		return blockBuildings;
	}
	return generateBlock(
		{
			x:
				typeof end.untilX === 'number'
					? (b.position.x as number) + (b.dimensions.width as number) + getRandomInt(500, 3000)
					: start.x,
			z:
				typeof end.untilZ === 'number'
					? (b.position.z as number) + (b.dimensions.depth as number) + getRandomInt(500, 3000)
					: start.z,
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
	...generateBlock({ x: leftBlockStart, z: 4500 }, { untilZ: 20000 }),
];

const centralAvenueLeft: BuildingPlan[] = [
	// {
	// 	dimensions: {
	// 		width: 400,
	// 		height: 1400,
	// 		depth: 500,
	// 	},
	// 	position: {
	// 		x: centralAvenueStart,
	// 		z: 4400,
	// 	},
	// },
];

const centralAvenueRight: BuildingPlan[] = [
	// {
	// 	dimensions: {
	// 		width: 400,
	// 		height: 1400,
	// 		depth: 500,
	// 	},
	// 	position: {
	// 		x: centralAvenueStart + avenueWidth,
	// 		z: 4400,
	// 	},
	// },
];

const backdrop: BuildingPlan[] = [];

export const buildings: BuildingPlan[] = [
	...rightBlock,
	...leftBlock,
	...centralAvenueLeft,
	...centralAvenueRight,
	...backdrop,
];
