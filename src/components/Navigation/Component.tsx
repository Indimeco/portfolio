import React from 'react';

import { sections } from '../../content';

import { NavigationWrapper, NavigationItem } from './Component.style';

const { links } = sections;

const scroll = (location: string) => () => {
	const target = document.getElementById(location);
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
	}
};

const Navigation: React.FC = () => (
	<NavigationWrapper data-testid="navigation">
		{links.map((link) => (
			<NavigationItem key={link} data-testid="navigation-item" onClick={scroll(link)}>
				{link}
			</NavigationItem>
		))}
	</NavigationWrapper>
);

export default Navigation;
