import React from 'react';
import { render as reactRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../components/UI/themes';

export const render = (Component, props) =>
	reactRender(
		<ThemeProvider theme={theme}>
			<Component {...props} />
		</ThemeProvider>,
	);
