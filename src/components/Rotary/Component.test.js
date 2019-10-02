import Component from './Component';
import { mount, render } from '../../utils/tests/withTheme';
import { findByTestAttr } from '../../utils/tests/findByTestAttr';
import { rotary } from '../../content';
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

	// TODO Test animation functionality, something like this:
	// it('renders second item after timeout', async () => {
	// 	const { getByText } = render(Component);
	// 	const nextWord = rotary.words[1];

	// 	await waitForElementToBeRemoved(() => getByText(rotary.words[0]));
	// 	expect(await getByText(nextWord)).toBeFalsy();
	// 	await waitForElement(() => getByText(rotary.words[1]));
	// 	expect(await getByText(nextWord)).toBeTruthy();
	// });
});
