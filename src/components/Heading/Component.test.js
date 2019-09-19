import Component from './Component';
import { mount } from '../../utils/tests/withTheme';
import { findByTestAttr } from '../../utils/tests/findByTestAttr';
import { title } from '../../content';

describe('Heading', () => {
	it('renders', () => {
		const wrapper = mount(Component);
		expect(findByTestAttr(wrapper, 'heading')).toHaveLength(1);
	});

	it('displays given title as h1', () => {
		const wrapper = mount(Component);
		expect(wrapper.find('h1').text()).toEqual(title);
	});
});
