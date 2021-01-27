import { render } from '../../../utils/tests/withTheme';
import { about } from '../../../content';

import Component from './Component';

describe('About', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('log')).toBeInTheDocument();
	});

	it('renders entries', () => {
		const { getAllByTestId } = render(Component);
		expect(getAllByTestId('log-entry')).toHaveLength(about.length);
	});

	it('renders icons', () => {
		const { getAllByTestId } = render(Component);
		expect(getAllByTestId('log-entry-icon').length).toBeGreaterThan(0);
	});
});
