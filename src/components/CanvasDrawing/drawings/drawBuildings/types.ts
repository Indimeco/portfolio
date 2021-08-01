export type BuildingDimension = {
	width: number;
	height: number;
	depth: number;
};
export type BuildingPosition = {
	x: number;
	z: number;
};
export type Building = {
	dimensions: BuildingDimension;
	position: BuildingPosition;
};
