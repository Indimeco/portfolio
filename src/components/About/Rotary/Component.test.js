import { waitForElement } from '@testing-library/dom';

import { render } from '../../../utils/tests/withTheme';
import { rotary } from '../../../content';

import Component from './Component';

// the rotary is divided by letters in order to animate, so we must concatenate the nodes to test
const firstWord = (content, element) => element.textContent === rotary.words[0];
const nextWord = (content, element) => element.textContent === rotary.words[1];

describe('Rotary', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('rotary')).toBeInTheDocument();
	});

	it('renders first item before timeout', () => {
		const { getByText } = render(Component);
		expect(getByText(firstWord)).toBeInTheDocument();
	});

	it('renders second item after delay', async () => {
		const { queryByText } = render(Component);

		expect(await queryByText(nextWord)).toBeFalsy();
		await waitForElement(() => queryByText(nextWord));
		expect(await queryByText(nextWord)).toBeTruthy();
	});
});
