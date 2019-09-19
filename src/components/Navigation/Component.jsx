import React from 'react';
import { NavigationWrapper, NavigationItem } from './Component.style';
import { sections } from '../../content';

const scroll = location => () => {
	const target = document.querySelector(`#${location}`);
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
	}
};

const Navigation = () => (
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
);

export default Navigation;
