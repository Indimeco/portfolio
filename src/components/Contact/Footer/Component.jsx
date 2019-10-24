import React from 'react';
import { FooterWrapper, FooterContent } from './Component.style';
import { github } from '../../../content';

export const Footer = () => {
	return (
		<FooterWrapper data-testid="footer">
			<FooterContent href={github}>View this page's source code</FooterContent>
		</FooterWrapper>
	);
};

export default Footer;
