import { BuildingPlan, BuildingPlanPosition } from './types';

/* There is the implicit assumption that the avenue width contains the vanishing point
 * When this isn't true the ordering of the building rendering completely breaks down
 * However there are perf benefits to generating the buildings before knowing where the vanishing point is
 */

const leftBlockStart = -1400;
const avenueWidth = 2500;
const rightBlockStart = leftBlockStart + avenueWidth;
const mainAvenueLength = 70000;

const buildingConfig = {
	minHeight: 800,
	maxHeight: 6000,
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

const generateRow = (
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
	return generateRow(
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

const generateLeftBlock = (
	start: { x: number; z: number },
	end: {
		untilX?: number;
		untilZ?: number;
	},
): BuildingPlan[] => [
	...generateRow({ x: start.x, z: start.z }, end),
	...generateRow(
		{
			x: typeof end.untilZ === 'number' ? start.x - buildingConfig.maxWidth - buildingConfig.maxGap : start.x,
			z: typeof end.untilX === 'number' ? start.z - buildingConfig.maxDepth - buildingConfig.maxGap : start.z,
		},
		end,
	),
];

const generateRightBlock = (
	start: { x: number; z: number },
	end: {
		untilX?: number;
		untilZ?: number;
	},
): BuildingPlan[] => [
	...generateRow({ x: start.x, z: start.z }, end),
	...generateRow(
		{
			x: typeof end.untilZ === 'number' ? start.x + buildingConfig.maxWidth + buildingConfig.maxGap : start.x,
			z: typeof end.untilX === 'number' ? start.z + buildingConfig.maxDepth + buildingConfig.maxGap : start.z,
		},
		end,
	),
];

const rightBlock: BuildingPlan[] = [
	{
		dimensions: {
			width: 800,
			height: (landmarks) => landmarks.StreetLevel - landmarks.TitleLevel - 100,
			depth: 1000,
		},
		position: {
			x: rightBlockStart,
			z: -300,
		},
	},
	...generateRightBlock(
		{ x: rightBlockStart, z: 1000 + buildingConfig.minGap },
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
	...generateLeftBlock(
		{ x: leftBlockStart, z: 1800 + buildingConfig.minGap + buildingConfig.minGap },
		{ untilZ: mainAvenueLength },
	),
];

const centralAvenue: BuildingPlan[] = [
	...generateLeftBlock(
		{ x: -40000, z: mainAvenueLength + buildingConfig.maxDepth + buildingConfig.maxGap },
		{ untilX: leftBlockStart },
	).reverse(),
	...generateLeftBlock(
		{ x: -40000, z: mainAvenueLength + buildingConfig.maxDepth + buildingConfig.maxGap + avenueWidth },
		{ untilX: leftBlockStart },
	).reverse(),

	...generateRightBlock(
		{ x: rightBlockStart, z: mainAvenueLength + buildingConfig.maxDepth + buildingConfig.maxGap },
		{ untilX: 100000, untilZ: 200000 },
	),
	...generateRightBlock(
		{
			x: leftBlockStart + buildingConfig.maxGap,
			z: mainAvenueLength + buildingConfig.maxDepth + buildingConfig.maxGap + avenueWidth,
		},
		{ untilX: 100000, untilZ: 200000 },
	),
];

export const buildings: BuildingPlan[] = [...leftBlock, ...rightBlock, ...centralAvenue];
