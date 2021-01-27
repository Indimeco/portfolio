import { render } from '../../utils/tests/withTheme';
import { heading } from '../../content';

import Component from './Component';

describe('Heading', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('heading')).toBeInTheDocument();
	});

	it('displays given title as h1', () => {
		const { getByText } = render(Component);
		expect(getByText(heading.title)).toBeInTheDocument();
	});
});
