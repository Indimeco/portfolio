import { BuildingPlan, BuildingPlanPosition } from './types';

const leftBlockStart = -1400;
const avenueWidth = 2500;
const rightBlockStart = leftBlockStart + avenueWidth;
const mainAvenueLength = 20000;

const buildingConfig = {
	minHeight: 800,
	maxHeight: 4000,
	minDepth: 400,
	maxDepth: 3000,
	minWidth: 800,
	maxWidth: 900,
	minGap: 500,
	maxGap: 600,
};

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
const getPsuedoRandomHeight = (): number => {
	switch (getRandomInt(1, 3)) {
		case 1:
			return getRandomInt(buildingConfig.minHeight, buildingConfig.minHeight + 1000);
		case 2:
			return getRandomInt(buildingConfig.minHeight, buildingConfig.maxHeight - 1000);
		case 3:
			return getRandomInt(buildingConfig.minHeight, buildingConfig.maxHeight);
		default:
			throw new Error('Invalid case');
	}
};

const generateBuilding = (position: BuildingPlanPosition): BuildingPlan => ({
	dimensions: {
		width: getRandomInt(buildingConfig.minWidth, buildingConfig.maxWidth),
		height: getPsuedoRandomHeight(),
		depth: getRandomInt(buildingConfig.minDepth, buildingConfig.maxDepth),
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
	if (
		(typeof end.untilX === 'number' && b.position.x >= end.untilX) ||
		(typeof end.untilZ === 'number' && b.position.z >= end.untilZ)
	) {
		return buildings || [];
	}
	const gap = getRandomInt(buildingConfig.minGap, buildingConfig.maxGap);
	return generateBlock(
		{
			x:
				typeof end.untilX === 'number'
					? (b.position.x as number) + (b.dimensions.width as number) + gap
					: start.x,
			z:
				typeof end.untilZ === 'number'
					? (b.position.z as number) + (b.dimensions.depth as number) + gap
					: start.z,
		},
		end,
		[...(buildings || []), b],
	);
};

const rightBlock: BuildingPlan[] = [
	{
		dimensions: {
			width: 800,
			height: (landmarks) => landmarks.StreetLevel - landmarks.TitleLevel,
			depth: 1000,
		},
		position: {
			x: rightBlockStart,
			z: 0,
		},
	},
	...generateBlock({ x: rightBlockStart, z: 1000 + buildingConfig.minGap }, { untilZ: mainAvenueLength }),
	...generateBlock(
		{ x: rightBlockStart + buildingConfig.maxWidth + buildingConfig.maxGap, z: 0 },
		{ untilZ: mainAvenueLength },
	),
];

const leftBlock: BuildingPlan[] = [
	{
		dimensions: {
			width: buildingConfig.minWidth,
			height: buildingConfig.minHeight,
			depth: 1000,
		},
		position: {
			x: leftBlockStart,
			z: 0,
		},
	},
	{
		dimensions: {
			width: buildingConfig.minWidth,
			height: buildingConfig.minHeight + 400,
			depth: 800,
		},
		position: {
			x: leftBlockStart,
			z: 1000 + buildingConfig.minGap,
		},
	},
	...generateBlock(
		{ x: leftBlockStart, z: 1800 + buildingConfig.minGap + buildingConfig.minGap },
		{ untilZ: mainAvenueLength },
	),
	...generateBlock(
		{ x: leftBlockStart - buildingConfig.maxWidth - buildingConfig.maxGap, z: -900 },
		{ untilZ: mainAvenueLength },
	),
];

const centralAvenue: BuildingPlan[] = [
	// left
	...generateBlock(
		{ x: -20000, z: mainAvenueLength + buildingConfig.maxDepth + buildingConfig.maxGap },
		{ untilX: leftBlockStart },
	).reverse(),
	...generateBlock(
		{
			x: -20000,
			z:
				mainAvenueLength +
				buildingConfig.maxDepth +
				buildingConfig.maxGap +
				buildingConfig.maxGap +
				buildingConfig.maxDepth,
		},
		{ untilX: leftBlockStart },
	).reverse(),
	// left far side
	...generateBlock(
		{ x: -20000, z: mainAvenueLength + buildingConfig.maxDepth + buildingConfig.maxGap + avenueWidth },
		{ untilX: leftBlockStart },
	).reverse(),
	...generateBlock(
		{
			x: -20000,
			z:
				mainAvenueLength +
				buildingConfig.maxDepth +
				buildingConfig.maxGap +
				buildingConfig.maxGap +
				buildingConfig.maxDepth +
				avenueWidth,
		},
		{ untilX: leftBlockStart },
	).reverse(),

	// right
	...generateBlock(
		{ x: rightBlockStart, z: mainAvenueLength + buildingConfig.maxDepth + buildingConfig.maxGap },
		{ untilX: 30000, untilZ: 70000 },
	),
	...generateBlock(
		{
			x: rightBlockStart,
			z:
				mainAvenueLength +
				buildingConfig.maxDepth +
				buildingConfig.maxGap +
				buildingConfig.maxGap +
				buildingConfig.maxDepth,
		},
		{ untilX: 30000, untilZ: 90000 },
	),
	// right far side
	...generateBlock(
		{
			x: leftBlockStart + buildingConfig.maxGap,
			z: mainAvenueLength + buildingConfig.maxDepth + buildingConfig.maxGap + avenueWidth,
		},
		{ untilX: 30000, untilZ: 70000 },
	),
	...generateBlock(
		{
			x: leftBlockStart + buildingConfig.maxGap,
			z:
				mainAvenueLength +
				buildingConfig.maxDepth +
				buildingConfig.maxGap +
				buildingConfig.maxGap +
				buildingConfig.maxDepth +
				avenueWidth,
		},
		{ untilX: 30000, untilZ: 90000 },
	),
];

export const buildings: BuildingPlan[] = [...leftBlock, ...rightBlock, ...centralAvenue];
