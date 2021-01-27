import React from 'react';

import { portfolioSourceCode } from '../../../content';

import { FooterWrapper, FooterContent } from './Component.style';

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
