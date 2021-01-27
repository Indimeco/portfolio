import { render } from '../../../utils/tests/withTheme';

import Component from './Component';

describe('Footer', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('footer')).toBeInTheDocument();
	});
});
