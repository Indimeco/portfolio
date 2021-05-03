import { Coordinate3D, Polygon3D } from '../../drawing';

export const buildings: [Polygon3D, Coordinate3D][] = [
	// left receding
	[
		{
			width: 500,
			height: 3000,
			depth: 500,
		},
		{ x: -90, y: 0, z: 600 },
	],

	// left center tall
	// [
	// 	{
	// 		width: 300,
	// 		height: 2500,
	// 		depth: 600,
	// 	},
	// 	{ x: -20, y: 0, z: -10 },
	// ],

	// // middle cover
	[
		{
			width: 400,
			height: 2600,
			depth: 400,
		},
		{ x: 400, y: 0, z: 8 },
	],

	// // left centre medium tall
	// [
	// 	{
	// 		width: 240,
	// 		height: 2670,
	// 		depth: 400,
	// 	},
	// 	{ x: 20, y: 0, z: 4 },
	// ],

	// // left centre medium
	// [
	// 	{
	// 		width: 300,
	// 		height: 2400,
	// 		depth: 400,
	// 	},
	// 	{ x: 100, y: 0, z: 2 },
	// ],

	// // left tall edge
	// [
	// 	{
	// 		width: 250,
	// 		height: 2950,
	// 		depth: 230,
	// 	},
	// 	{ x: -200, y: 0, z: 1 },
	// ],

	// // medium right edge
	// [
	// 	{
	// 		width: 200,
	// 		height: 2800,
	// 		depth: 300,
	// 	},
	// 	{ x: 900, y: 0, z: 1 },
	// ],

	// // small right edge
	// [
	// 	{
	// 		width: 400,
	// 		height: 2200,
	// 		depth: 400,
	// 	},
	// 	{ x: 700, y: 0, z: 1 },
	// ],

	// // left edge short corner
	// [
	// 	{
	// 		width: 400,
	// 		height: 2080,
	// 		depth: 400,
	// 	},
	// 	{ x: -300, y: 0, z: 0 },
	// ],
];
