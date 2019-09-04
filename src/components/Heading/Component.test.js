import React from 'react';
import renderer from 'react-test-renderer';
import Component from './Component';

describe('Navigation', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<Component />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
