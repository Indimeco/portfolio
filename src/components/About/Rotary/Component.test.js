import Component from './Component';
import { render } from '../../../utils/tests/withTheme';
import { rotary } from '../../../content';
import { waitForElement } from '@testing-library/dom';

describe('Rotary', () => {
	it('renders', () => {
		const { getByTestId } = render(Component);
		expect(getByTestId('rotary')).toBeInTheDocument();
	});

	it('renders first item before timeout', () => {
		const { getByText } = render(Component);
		expect(getByText(rotary.words[0])).toBeInTheDocument();
	});

	it('renders second item after delay', async () => {
		const { queryByText } = render(Component);
		const nextWord = rotary.words[1];

		expect(await queryByText(nextWord)).toBeFalsy();
		await waitForElement(() => queryByText(rotary.words[1]));
		expect(await queryByText(nextWord)).toBeTruthy();
	});
});
