import React from 'react';
import { FooterWrapper, FooterContent } from './Component.style';
import { github } from '../../content';
import theme from '../UI/themes/auxTheme';
import { ThemeProvider } from 'styled-components';

export const Footer = () => {
	return (
		<ThemeProvider theme={theme}>
			<FooterWrapper data-test="footer">
				<FooterContent href={github}>
					View this page's source code
				</FooterContent>
			</FooterWrapper>
		</ThemeProvider>
	);
};

export default Footer;
