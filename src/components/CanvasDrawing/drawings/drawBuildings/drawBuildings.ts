import theme from '../../../UI/themes';
import { drawRectangularPrism, getColorFromDepth } from '../../drawing';
import { darkPolygonFace, lightPolygonFace } from '../../drawing/coloration';
import { Drawing } from '../types';

import { buildings } from './buildings';

const rustModule = import('../../../../wasm-buildings/generated_js/wasm_buildings');
let awaitedRustModule: any;

const getRust = () => {
	if (awaitedRustModule) {
		return awaitedRustModule;
	}
	rustModule.then((r) => {
		awaitedRustModule = r;
	});
	return null;
};

/*
 * colorize the buildings outside of the render loop
 * for a million tiny perf gains
 */
const coloredBuildings = buildings.map((b) => {
	const color = getColorFromDepth(theme.colors.bg, 300000, b.position.z);
	return {
		...b,
		colors: {
			light: lightPolygonFace(color),
			dark: darkPolygonFace(color),
			neutral: color,
		},
	};
});

export const drawBuildings: Drawing = (context) => {
	const rust = getRust();
	if (!context || !rust) return null;
	const { vanishingPoint, ctx, drawVars } = context;

	// TODO we can bring back the custom landmark buildings, but we have to do it here without mapping all of the buildings for perf reasons
	coloredBuildings.forEach(({ dimensions: { width, height, depth }, position: { x, z }, colors }) =>
		rust.rust_draw_rectangular_prism(
			{
				vanishing_point: vanishingPoint,
				observer_distance_from_picture_plane: drawVars.observerDistanceFromPicturePlane,
			},
			{
				width,
				height,
				depth,
			},
			{
				x,
				y: drawVars.StreetLevel,
				z,
			},
			colors,
		),
	);

	return context;
};
