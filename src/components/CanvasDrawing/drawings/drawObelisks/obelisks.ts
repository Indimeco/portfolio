import { divide, flatten, map, multiply, uniq, pipe, unnest } from 'ramda';

import { Coordinate3D, Polygon3D } from '../../drawing';

type GetRow = (x: number) => [Polygon3D, Coordinate3D][];
// depth is a hard coded factor rather than a scalable attribute
const getRow: GetRow = (x) =>
	[...Array(6)]
		.map<[Polygon3D, Coordinate3D]>((value, index) => [
			{
				width: 100,
				height: 800,
				depth: 100,
			},
			{ x, y: 200, z: index * 30 || 2 },
		])
		.reverse();

type GenerateRows = (area: number, frequency: number) => [Polygon3D, Coordinate3D][];
const generateRows: GenerateRows = pipe(
	(area: number, frequency: number) =>
		Array.from(Array(frequency), (_, index) => multiply(index, divide(area, frequency))),
	map((v) => [v, multiply(v, -1)]),
	flatten,
	uniq,
	map(getRow),
	// reverse from ramda has some typing issues
	(list) => list.reverse(),
	unnest,
);

export const obelisks: [Polygon3D, Coordinate3D][] = [...generateRows(8000, 5)];
