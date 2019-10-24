import Component from './Component';
import { mount, render } from '../../../utils/tests/withTheme';
import { findByTestAttr } from '../../../utils/tests/findByTestAttr';
import { rotary } from '../../../content';
import {
	waitForDomChange,
	waitForElementToBeRemoved,
	waitForElement,
} from '@testing-library/dom';

describe('Rotary', () => {
	it('renders', () => {
		const wrapper = mount(Component);
		expect(findByTestAttr(wrapper, 'rotary')).toHaveLength(1);
	});

	it('renders first item before timeout', () => {
		const wrapper = mount(Component);
		expect(wrapper.text()).toContain(rotary.words[0]);
	});

	it('renders second item after delay', async () => {
		const { queryByText } = render(Component);
		const nextWord = rotary.words[1];

		expect(await queryByText(nextWord)).toBeFalsy();
		await waitForElement(() => queryByText(rotary.words[1]));
		expect(await queryByText(nextWord)).toBeTruthy();
	});
});
