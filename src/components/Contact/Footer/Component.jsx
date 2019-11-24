import React from 'react';
import { FooterWrapper, FooterContent } from './Component.style';
import { portfolioSourceCode } from '../../../content';

export const Footer = () => {
	return (
		<FooterWrapper data-testid="footer">
			<FooterContent href={portfolioSourceCode} target="_blank">
				View this page's source code
			</FooterContent>
		</FooterWrapper>
	);
};

export default Footer;
