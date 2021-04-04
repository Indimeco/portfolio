import { darken, lighten } from 'polished';

export function lightPolygonFace(color: string): string {
	return lighten(0.1, color);
}
export function darkPolygonFace(color: string): string {
	return darken(0.1, color);
}
export function getColorFromDepth(color: string, maxDepth: number, depth: number): string {
	return lighten(depth / maxDepth, color);
}
