import { render } from '../../utils/tests/withTheme';

import Component from './Component';

describe('About', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('about')).toBeInTheDocument();
	});
});
