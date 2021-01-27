import { render } from '../../utils/tests/withTheme';

import Component from './Component';

describe('Section', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('section')).toBeInTheDocument();
	});
});
