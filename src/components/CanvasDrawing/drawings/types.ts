import { Coordinate } from '../drawing';

export enum LandmarkDefinitions {
	StreetLevel = 'StreetLevel',
	TitleLevel = 'TitleLevel',
	PageEnd = 'End',
}
export type Landmarks = Record<LandmarkDefinitions, number>;

export type DrawVars = Landmarks & {
	observerDistanceFromPicturePlane: number;
	maximumDepth: number;
};

export type DrawingContext = null | {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	vanishingPoint: Coordinate;
	drawVars: DrawVars;
};

export type DrawingSetup = (
	canvas: HTMLCanvasElement,
	vanishingPointY: number,
	landmarks: Landmarks,
) => DrawingContext;
export type Drawing = (context: DrawingContext) => DrawingContext;
