import { render } from '../../../utils/tests/withTheme';
import { social } from '../../../content';

import Component from './Component';

describe('Social', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('social')).toBeInTheDocument();
	});

	it('renders social media links', () => {
		const { getByTestId } = render(Component);
		const container = getByTestId('social');

		expect(container.querySelectorAll('a')).toHaveLength(social.length);
		container.querySelectorAll('a').forEach((element) => {
			expect(element.href).toMatch(/^https?:\/\/\w/);
		});

		expect(container.querySelectorAll('svg')).toHaveLength(social.length);
	});
});
