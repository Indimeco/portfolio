import React from 'react';
import { NavigationWrapper, NavigationItem } from './Component.style';
import { sections } from '../../content';
import { ThemeProvider } from 'styled-components';
import theme from '../UI/themes/auxTheme';

const scroll = location => () => {
	const target = document.querySelector(`#${location}`);
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
	}
};

const Navigation = () => (
	<ThemeProvider theme={theme}>
		<NavigationWrapper data-test="navigation">
			{sections.map(section => (
				<NavigationItem
					key={section}
					data-test="navigation-item"
					onClick={scroll(section)}
				>
					{section}
				</NavigationItem>
			))}
		</NavigationWrapper>
	</ThemeProvider>
);

export default Navigation;
