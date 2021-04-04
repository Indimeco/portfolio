import { getRectangularPlane } from './rectangularPrisms';

describe('rectangular prisms', () => {
	it('can create simple rectangular planes', () => {
		const plane = getRectangularPlane({
			origin: { x: 2, y: 0, z: 10 },
			width: 20,
			height: 35,
		});

		expect(plane).toStrictEqual([
			{ x: 2, y: 0, z: 10 },
			{ x: 22, y: 0, z: 10 },
			{ x: 22, y: 35, z: 10 },
			{ x: 2, y: 35, z: 10 },
		]);
	});
});
