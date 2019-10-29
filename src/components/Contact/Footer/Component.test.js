import Component from './Component';
import { render } from '../../../utils/tests/withTheme';

describe('Footer', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('footer')).toBeInTheDocument();
	});
});
