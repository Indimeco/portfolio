import React from 'react';
import { FooterWrapper, FooterContent } from './Component.style';
import { github } from '../../../content';
import { mainTheme } from '../../UI/themes';
import { ThemeProvider } from 'styled-components';

export const Footer = () => {
	return (
		<ThemeProvider theme={mainTheme}>
			<FooterWrapper data-test="footer">
				<FooterContent href={github}>
					View this page's source code
				</FooterContent>
			</FooterWrapper>
		</ThemeProvider>
	);
};

export default Footer;
