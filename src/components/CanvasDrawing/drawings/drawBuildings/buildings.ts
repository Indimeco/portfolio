import { flow } from 'fp-ts/lib/function';

import { Building, BuildingPosition } from './types';

/* There is the implicit assumption that the avenue width contains the vanishing point
 * When this isn't true the ordering of the building rendering completely breaks down
 * However there are perf benefits to generating the buildings before knowing where the vanishing point is
 */

const leftBlockStart = -2500;
const avenueSize = 5000;
const rightBlockStart = leftBlockStart + avenueSize;
const mainAvenueLength = 50000;
const buildingConfig = {
	minHeight: 2600,
	maxHeight: 6000,
	minDepth: 800,
	maxDepth: 2000,
	minWidth: 1500,
	maxWidth: 2000,
	minGap: 800,
	maxGap: 1200,
};
const blockSize = Math.max(buildingConfig.maxWidth, buildingConfig.maxDepth) * 2 + avenueSize;

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
const minMax = (min: number, max: number) =>
	flow(
		(val: number) => (val > max ? max : val),
		(val: number) => (val < min ? min : val),
	);
const getPsuedoRandomHeight = (d = 0): number =>
	getRandomInt(
		buildingConfig.minHeight,
		minMax(buildingConfig.minHeight, buildingConfig.maxHeight)(buildingConfig.maxHeight * (d / 8000)),
	);

const generateBuilding = (position: BuildingPosition): Building => ({
	dimensions: {
		width: getRandomInt(buildingConfig.minWidth, buildingConfig.maxWidth),
		height: getPsuedoRandomHeight(position.z),
		depth: getRandomInt(buildingConfig.minDepth, buildingConfig.maxDepth),
	},
	position,
});

const generateRow = (
	start: BuildingPosition,
	end: {
		untilX?: number;
		untilZ?: number;
	},
	buildings?: Building[],
): Building[] => {
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
			x: typeof end.untilX === 'number' ? b.position.x + b.dimensions.width + gap : start.x,
			z: typeof end.untilZ === 'number' ? b.position.z + b.dimensions.depth + gap : start.z,
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
): Building[] => [
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
): Building[] => [
	...generateRow({ x: start.x, z: start.z }, end),
	...generateRow(
		{
			x: typeof end.untilZ === 'number' ? start.x + buildingConfig.maxWidth + buildingConfig.maxGap : start.x,
			z: typeof end.untilX === 'number' ? start.z + blockSize : start.z,
		},
		end,
	),
];

const right: Building[] = [
	...generateRightBlock(
		{ x: rightBlockStart, z: 0 + buildingConfig.minDepth + buildingConfig.minGap - 400 },
		{ untilZ: mainAvenueLength },
	),
	...generateRightBlock({ x: rightBlockStart + blockSize + avenueSize, z: 0 }, { untilZ: mainAvenueLength }),
	...generateRightBlock(
		{ x: rightBlockStart + (blockSize + avenueSize) * 2, z: 0 },
		{ untilZ: mainAvenueLength },
	),
];

const left: Building[] = [
	{
		dimensions: {
			width: buildingConfig.minWidth,
			height: buildingConfig.minHeight,
			depth: buildingConfig.minDepth,
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
	...generateLeftBlock({ x: leftBlockStart - avenueSize - blockSize, z: 0 }, { untilZ: mainAvenueLength }),
];

const central: Building[] = [
	...generateLeftBlock({ x: -40000, z: mainAvenueLength + blockSize }, { untilX: leftBlockStart }).reverse(),
	...generateLeftBlock(
		{ x: -40000, z: mainAvenueLength + blockSize + avenueSize },
		{ untilX: leftBlockStart },
	).reverse(),

	...generateRightBlock(
		{ x: rightBlockStart, z: mainAvenueLength + blockSize },
		{ untilX: 50000, untilZ: 9999999 },
	),
	...generateRightBlock(
		{
			x: leftBlockStart + buildingConfig.maxGap,
			z: mainAvenueLength + blockSize + avenueSize,
		},
		{ untilX: 50000, untilZ: 9999999 },
	),

	// This is a kind of sad approximation
	...generateRightBlock({ x: 55000, z: 100000 }, { untilX: 150000 }),
	...generateRightBlock(
		{
			x: 55000,
			z: 150000,
		},
		{ untilX: 100000 },
	),
];

// prettier-ignore
export const buildings: Building[] = [
	...left,
	...right,
	...central,
].reverse();
