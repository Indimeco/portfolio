import { percentOf, getRectangularPlane, c2XIs, c2YIs } from './drawing';

describe('Heading drawing', () => {
	it('can find relative coordinate positions', () => {
		expect(percentOf(100, 50)).toBe(50);
		expect(percentOf(200, 25)).toBe(50);
		expect(percentOf(201, 25)).toBe(50);
	});

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

	it('can determine coordinate relative location based on the HTMLCanvas grid', () => {
		const c1 = { x: 0, y: 0 };
		const c2 = { x: 100, y: 100 };

		expect(c2XIs(c1, c2)).toStrictEqual('right');
		// In html canvas, larger Y means the point is lower
		expect(c2YIs(c1, c2)).toStrictEqual('below');
		expect(c2XIs(c2, c1)).toStrictEqual('left');
		expect(c2YIs(c2, c1)).toStrictEqual('above');
	});
});
