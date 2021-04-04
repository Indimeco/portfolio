export type Coordinate = { x: number; y: number };
export type Coordinate3D = Coordinate & { z: number };
export type Polygon = {
	width: number;
	height: number;
};
export type Polygon3D = Polygon & { depth: number };
export type PicturePlane = {
	vanishingPoint: Coordinate;
	observerDistanceFromPicturePlane: number;
};
export type CoordinateRelationX = 'left' | 'right' | 'same';
export type CoordinateRelationY = 'above' | 'below' | 'same';
