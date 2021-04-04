import { Coordinate3D, Polygon3D } from '../../drawing';

export const buildings: [Polygon3D, Coordinate3D][] = [
	// left receding
	[
		{
			width: 50,
			height: 300,
			depth: 30,
		},
		{ x: 0, y: 0, z: 6 },
	],

	// small right middle
	[
		{
			width: 30,
			height: 300,
			depth: 30,
		},
		{ x: 80, y: 40, z: 2 },
	],

	// left center tall
	[
		{
			width: 50,
			height: 300,
			depth: 30,
		},
		{ x: 2, y: 0, z: 1 },
	],

	// middle cover
	[
		{
			width: 40,
			height: 300,
			depth: 40,
		},
		{ x: 40, y: 40, z: 0.8 },
	],

	// left centre medium tall
	[
		{
			width: 24,
			height: 300,
			depth: 40,
		},
		{ x: 2, y: 33, z: 0.4 },
	],

	// left centre medium
	[
		{
			width: 30,
			height: 300,
			depth: 40,
		},
		{ x: 10, y: 60, z: 0.2 },
	],

	// left tall edge
	[
		{
			width: 25,
			height: 300,
			depth: 23,
		},
		{ x: -20, y: 5, z: 0.1 },
	],

	// medium right edge
	[
		{
			width: 20,
			height: 300,
			depth: 30,
		},
		{ x: 90, y: 20, z: 0.1 },
	],

	// small right edge
	[
		{
			width: 40,
			height: 300,
			depth: 40,
		},
		{ x: 70, y: 80, z: 0.1 },
	],

	// left edge short corner
	[
		{
			width: 40,
			height: 300,
			depth: 40,
		},
		{ x: -30, y: 92, z: 0 },
	],
];
