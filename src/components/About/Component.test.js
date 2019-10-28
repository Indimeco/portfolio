import Component from './Component';
import { render } from '../../utils/tests/withTheme';

describe('About', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('about')).toBeInTheDocument();
	});
});
