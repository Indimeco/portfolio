import React from 'react';
import Social from './Social';
import Footer from './Footer';
import {
	ContactView,
	ContactWrapper,
	ContactHeading,
} from './Component.style.js';

export const Contact = () => {
	return (
		<ContactView>
			<ContactWrapper>
				<ContactHeading as="h2">Find me online</ContactHeading>
				<Social />
			</ContactWrapper>
			<Footer />
		</ContactView>
	);
};

export default Contact;
