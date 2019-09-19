import Component from './Component';
import { mount } from '../../utils/tests/withTheme';
import { findByTestAttr } from '../../utils/tests/findByTestAttr';
import { social } from '../../content';

describe('Footer', () => {
	const props = {
		social: social,
	};

	it('renders', () => {
		const wrapper = mount(Component, props);
		expect(findByTestAttr(wrapper, 'footer')).toHaveLength(1);
	});
});
