import React from 'react';
import { shallow as enzymeShallow, mount as enzymeMount } from 'enzyme';
import { render as reactRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../components/UI/themes';

export const shallow = (Component, props) =>
	enzymeShallow(
		<ThemeProvider theme={theme}>
			<Component {...props} />
		</ThemeProvider>,
	)
		.dive()
		.dive();

export const mount = (Component, props) =>
	enzymeMount(
		<ThemeProvider theme={theme}>
			<Component {...props} />
		</ThemeProvider>,
	);

export const render = (Component, props) =>
	reactRender(
		<ThemeProvider theme={theme}>
			<Component {...props} />
		</ThemeProvider>,
	);
