import React from 'react';

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Root } from './Component.style.js';
import './base.css';

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<Root>
				<main>{children}</main>
			</Root>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
