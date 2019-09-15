import { PureHeading } from './Component';
import { mount } from '../../utils/tests/withTheme';
import { findByTestAttr } from '../../utils/tests/findByTestAttr';

describe('Heading', () => {
	const data = {
		site: {
			siteMetadata: {
				title: `Jam`,
				description: 'Milk',
			},
		},
	};

	it('renders', () => {
		const wrapper = mount(PureHeading, { data: data });
		expect(findByTestAttr(wrapper, 'heading')).toHaveLength(1);
	});

	it('displays given title as h1', () => {
		const wrapper = mount(PureHeading, { data: data });
		expect(wrapper.find('h1').text()).toEqual('Jam');
	});
});
