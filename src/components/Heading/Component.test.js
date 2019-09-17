import Component from './Component';
import { mount } from '../../utils/tests/withTheme';
import { findByTestAttr } from '../../utils/tests/findByTestAttr';

describe('Heading', () => {
	const props = {
		title: 'Tasty Jam',
		description: 'Crushed',
	};

	it('renders', () => {
		const wrapper = mount(Component, props);
		expect(findByTestAttr(wrapper, 'heading')).toHaveLength(1);
	});

	it('displays given title as h1', () => {
		const wrapper = mount(Component, props);
		expect(wrapper.find('h1').text()).toEqual('Tasty Jam');
	});
});
