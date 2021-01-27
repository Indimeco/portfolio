import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '../UI/themes';
import Navigation from '../Navigation';

import { Main } from './Component.style.js';

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<Navigation />
				<Main>{children}</Main>
			</>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
