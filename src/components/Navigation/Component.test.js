import Component from './Component';
import { mount } from '../../utils/tests/withTheme';
import { findByTestAttr } from '../../utils/tests/findByTestAttr';

const defaultProps = { sections: ['About', 'Portfolio', 'Contact'] };

describe('Navigation', () => {
	it('renders', () => {
		const wrapper = mount(Component, defaultProps);
		expect(findByTestAttr(wrapper, 'navigation')).toHaveLength(1);
	});

	it('creates navigation links', () => {
		const wrapper = mount(Component, defaultProps);
		expect(findByTestAttr(wrapper, 'navigation-item')).toHaveLength(3);
	});
});
