import React from 'react';

import { FadeOnScroll } from '../UI/utils';

import Social from './Social';
import Footer from './Footer';
import { ContactView, ContactWrapper, ContactHeading } from './Component.style.js';

export const Contact = ({ title }) => {
	return (
		<ContactView>
			<ContactWrapper>
				<FadeOnScroll>
					<ContactHeading as="h2">{title}</ContactHeading>
					<Social />
				</FadeOnScroll>
			</ContactWrapper>
			<Footer />
		</ContactView>
	);
};

export default Contact;
