import Component from './Component';
import { mount } from '../../utils/tests/withTheme';
import { findByTestAttr } from '../../utils/tests/findByTestAttr';

describe('Section', () => {
	it('renders', () => {
		const wrapper = mount(Component);
		expect(findByTestAttr(wrapper, 'section')).toHaveLength(1);
	});
});
