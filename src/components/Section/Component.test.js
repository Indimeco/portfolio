import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Layout/theme';
import Component from './Component';

describe('Section', () => {
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
