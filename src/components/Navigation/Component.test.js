import React from 'react';
import renderer from 'react-test-renderer';
import Component from './Component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Layout/theme';

describe('Navigation', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(
				<ThemeProvider theme={theme}>
					<Component />
				</ThemeProvider>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
