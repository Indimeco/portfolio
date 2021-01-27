import React from 'react';

import { sections } from '../../content';

import { NavigationWrapper, NavigationItem } from './Component.style';

const { links } = sections;

const scroll = location => () => {
	const target = document.querySelector(`#${location}`);
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
	}
};

const Navigation = () => (
	<NavigationWrapper data-testid="navigation">
		{links.map(link => (
			<NavigationItem key={link} data-testid="navigation-item" onClick={scroll(link)}>
				{link}
			</NavigationItem>
		))}
	</NavigationWrapper>
);

export default Navigation;
