import { c2XIs, c2YIs } from './coordinates';

describe('Heading drawing', () => {
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
