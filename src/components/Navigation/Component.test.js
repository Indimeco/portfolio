import Component from './Component';
import { render } from '../../utils/tests/withTheme';

describe('Navigation', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('navigation')).toBeInTheDocument();
	});

	it('creates navigation links', () => {
		const { getAllByTestId } = render(Component);
		expect(getAllByTestId('navigation-item')).toHaveLength(3);
	});
});
