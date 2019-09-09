import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Layout/theme';
import { PureHeading } from './Component';

describe('Heading', () => {
	const data = {
		site: {
			siteMetadata: {
				title: `Jam`,
				description: 'Milk',
			},
		},
	};

	it('renders correctly', () => {
		const tree = renderer
			.create(
				<ThemeProvider theme={theme}>
					<PureHeading data={data} />
				</ThemeProvider>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
