import React from 'react';
import { NavigationWrapper, NavigationItem } from './Component.style';

// TODO Consolidate elsewhere
const sections = ['About', 'Portfolio', 'Contact'];

const Navigation = () => (
	<NavigationWrapper>
		{sections.map(section => (
			<NavigationItem key={section} href={`#${section}`}>
				{section}
			</NavigationItem>
		))}
	</NavigationWrapper>
);

export default Navigation;
