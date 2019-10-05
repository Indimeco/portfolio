import Component from './Component';
import { mount } from '../../../utils/tests/withTheme';
import { findByTestAttr } from '../../../utils/tests/findByTestAttr';
import { about } from '../../../content';

describe('About', () => {
	it('renders', () => {
		const wrapper = mount(Component);
		expect(findByTestAttr(wrapper, 'log')).toHaveLength(1);
	});

	it('renders entries', () => {
		const wrapper = mount(Component);
		expect(findByTestAttr(wrapper, 'log-entry')).toHaveLength(about.length);
	});

	it('renders icons', () => {
		const wrapper = mount(Component);
		expect(findByTestAttr(wrapper, 'log-entry-icon').length).toBeTruthy();
	});
});
