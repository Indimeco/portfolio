import React from 'react';
import { renderWithTheme } from '../../utils/tests/renderWithTheme';
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
		const tree = renderWithTheme(<PureHeading data={data} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
