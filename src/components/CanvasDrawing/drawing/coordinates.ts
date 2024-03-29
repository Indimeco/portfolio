import { Coordinate, Coordinate3D, CoordinateRelationX, CoordinateRelationY } from './types';

export function convert3DCoordinateToPicturePlane(
	vanishingPoint: Coordinate,
	observerDistanceFromPicturePlane: number,
	coordinate: Coordinate3D,
): Coordinate {
	const multiplier = observerDistanceFromPicturePlane / (coordinate.z + observerDistanceFromPicturePlane);
	return {
		x: vanishingPoint.x + (coordinate.x - vanishingPoint.x) * multiplier,
		y: vanishingPoint.y + (coordinate.y - window.scrollY) * multiplier,
	};
}

export function c2XIs(c1: Coordinate, c2: Coordinate): CoordinateRelationX {
	if (c2.x > c1.x) return 'right';
	if (c2.x === c1.x) return 'same';
	return 'left';
}

export function c2YIs(c1: Coordinate, c2: Coordinate): CoordinateRelationY {
	if (c2.y > c1.y) return 'below';
	if (c2.y === c1.y) return 'same';
	return 'above';
}
