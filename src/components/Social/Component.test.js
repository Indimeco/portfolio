import Component from './Component';
import { mount } from '../../utils/tests/withTheme';
import { findByTestAttr } from '../../utils/tests/findByTestAttr';
import { social } from '../../content';

describe('Social', () => {
	it('renders', () => {
		const wrapper = mount(Component);
		expect(findByTestAttr(wrapper, 'social')).toHaveLength(1);
	});

	it('renders social media links', () => {
		const wrapper = mount(Component);
		expect(wrapper.find('a')).toHaveLength(social.length);
		expect(
			wrapper
				.find('a')
				.first()
				.props().href,
		).toMatch(/^https?:\/\/\w/);
		expect(wrapper.find('svg')).toHaveLength(social.length);
	});
});
