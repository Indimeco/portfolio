import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../UI/base/theme';
import { Main } from './Component.style.js';
import Navigation from '../Navigation';
import Footer from '../Footer';

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<Navigation />
				<Main>{children}</Main>
				<Footer />
			</>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
