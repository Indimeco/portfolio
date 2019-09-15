import React from 'react';
import { shallow as enzymeShallow, mount as enzymeMount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../components/Layout/theme';

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
