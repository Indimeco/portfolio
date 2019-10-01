import Component from './Component';
import { mount } from '../../utils/tests/withTheme';
import { findByTestAttr } from '../../utils/tests/findByTestAttr';
import { social } from '../../content';

describe('About', () => {
	it('renders', () => {
		const wrapper = mount(Component);
		expect(findByTestAttr(wrapper, 'about')).toHaveLength(1);
	});
});
