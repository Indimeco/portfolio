import React from 'react';
import { renderWithTheme } from '../../utils/tests/renderWithTheme';
import Component from './Component';

describe('Section', () => {
	it('renders correctly', () => {
		const tree = renderWithTheme(<Component />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
