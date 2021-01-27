import { render } from '../../utils/tests/withTheme';

import Component from './Component';

describe('Portfolio', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('portfolio')).toBeInTheDocument();
	});

	describe('Portfolio Item', () => {
		it('renders', () => {
			const { getAllByTestId } = render(Component);
			expect(getAllByTestId('portfolio-list-item').length).toBeGreaterThan(0);
		});

		it('has a control and a preview image', () => {
			const { getAllByTestId } = render(Component);
			const container = getAllByTestId('portfolio-list-item')[0];

			expect(container.querySelector('button')).toHaveProperty('onclick');
			expect(container.querySelector('img')).toHaveProperty('src');
		});

		it('is closed by default', () => {
			const { queryByTestId } = render(Component);
			expect(queryByTestId('portfolio-content')).not.toBeInTheDocument();
		});

		it('opens when clicked and then is visible', () => {
			window.HTMLElement.prototype.scrollIntoView = function() {};

			const { getAllByText, getByTestId, getAllByTestId } = render(Component);

			getAllByText('View details')[0].click();

			expect(getByTestId('portfolio-item-content')).toBeInTheDocument();
			expect(getAllByTestId('portfolio-item-content-desc').length).toBeGreaterThan(0);
			expect(getAllByTestId('portfolio-item-content-blurb').length).toBeGreaterThan(0);
		});

		it('returns to main view when go back is clicked', () => {
			window.HTMLElement.prototype.scrollIntoView = function() {};

			const { getAllByText, getByTestId, getAllByTestId } = render(Component);

			getAllByText('View details')[0].click();

			expect(getByTestId('portfolio-item-content')).toBeInTheDocument();

			getAllByText('Go back')[0].click();

			expect(getAllByTestId('portfolio-list-item').length).toBeGreaterThan(0);
		});
	});
});
