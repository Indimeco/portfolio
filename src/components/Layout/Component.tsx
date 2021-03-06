import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../UI/themes';
import Navigation from '../Navigation';

import { Main } from './Component.style';

const Layout: React.FC = ({ children, ...restProps }) => (
	<ThemeProvider theme={theme}>
		<>
			<Navigation />
			<Main {...restProps}>{children}</Main>
		</>
	</ThemeProvider>
);

export default Layout;
