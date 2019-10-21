import Component from './Component';
import { mount } from '../../utils/tests/withTheme';
import { findByTestAttr } from '../../utils/tests/findByTestAttr';

describe('Portfolio', () => {
	it('renders', () => {
		const wrapper = mount(Component);
		expect(findByTestAttr(wrapper, 'portfolio')).toHaveLength(1);
	});

	describe('Portfolio Item', () => {
		it('renders', () => {
			const wrapper = mount(Component);
			expect(findByTestAttr(wrapper, 'portfolio-item').length).toBeGreaterThan(
				0,
			);
		});

		it('has a control and a preview image', () => {
			const wrapper = findByTestAttr(
				mount(Component),
				'portfolio-item',
			).first();
			expect(wrapper.find('button')).toHaveLength(1);
			expect(wrapper.find('a img')).toHaveLength(1);
			expect(wrapper.find('a').instance()).toHaveProperty('href');
		});

		it('is closed by default', () => {
			const wrapper = findByTestAttr(
				mount(Component),
				'portfolio-item',
			).first();
			expect(findByTestAttr(wrapper, 'portfolio-content')).toHaveLength(0);
		});

		it('opens when clicked and then is visible', () => {
			window.HTMLElement.prototype.scrollIntoView = function() {};

			const wrapper = mount(Component);

			findByTestAttr(wrapper, 'portfolio-item')
				.at(0)
				.find('button')
				.simulate('click');

			expect(
				findByTestAttr(wrapper, 'portfolio-item-content').length,
			).toBeGreaterThan(0);
		});

		// TODO test go back button
	});
});
