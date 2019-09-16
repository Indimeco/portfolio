// TODO Outsource theme implementation to separate file with test utilities

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Main } from './Component.style.js';
import Navigation from '../Navigation';
import { sections } from '../../content';
import './base.css';

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<Navigation sections={sections} />
				<Main>{children}</Main>
			</>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
