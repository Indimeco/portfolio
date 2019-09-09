import React from 'react';
import renderer from 'react-test-renderer';
import Component from './Component';
import 'jest-styled-components';

describe('Portfolio', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<Component />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
