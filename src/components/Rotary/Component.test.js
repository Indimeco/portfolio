import Component from './Component';
import { mount, render } from '../../utils/tests/withTheme';
import { findByTestAttr } from '../../utils/tests/findByTestAttr';
import { rotary } from '../../content';
import { waitForDomChange } from '@testing-library/dom';

describe('Rotary', () => {
	it('renders', () => {
		const wrapper = mount(Component);
		expect(findByTestAttr(wrapper, 'rotary')).toHaveLength(1);
	});

	it('renders first item before timeout', () => {
		const wrapper = mount(Component);
		expect(wrapper.text()).toContain(rotary.words[0]);
	});

	it('renders second item after timeout', async () => {
		const { getByText } = render(Component);

		await waitForDomChange();
		const newWord = await getByText(rotary.words[1]);

		expect(newWord).toBeTruthy();
	});
});
