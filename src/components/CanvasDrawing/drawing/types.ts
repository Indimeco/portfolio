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

export type DrawingContext = null | {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	vanishingPoint: Coordinate;
};

export type DrawingSetup = (canvas: HTMLCanvasElement, vanishingPointY: number) => DrawingContext;
export type Drawing = (context: DrawingContext) => DrawingContext;
