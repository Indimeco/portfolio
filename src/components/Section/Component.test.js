import Component from './Component';
import { render } from '../../utils/tests/withTheme';

describe('Section', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('section')).toBeInTheDocument();
	});
});
