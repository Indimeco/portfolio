import React from 'react';
import Social from './Social';
import Footer from './Footer';
import {
	ContactView,
	ContactWrapper,
	ContactHeading,
} from './Component.style.js';
import { FadeOnScroll } from '../UI/utils';

export const Contact = () => {
	return (
		<ContactView>
			<ContactWrapper>
				<FadeOnScroll>
					<ContactHeading as="h2">Find me online</ContactHeading>
					<Social />
				</FadeOnScroll>
			</ContactWrapper>
			<Footer />
		</ContactView>
	);
};

export default Contact;
