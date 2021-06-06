import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { social } from '../../../content';
import { socialId } from '../../../content/social';

import { SocialWrapper, SocialLink } from './Component.style';

export const Social = () => (
	<SocialWrapper data-testid="social" id={socialId}>
		{social.map(({ href, icon, name }) => (
			<SocialLink key={`social${href}`} href={href} aria-label={name} target="_blank">
				<FontAwesomeIcon icon={icon} />
			</SocialLink>
		))}
	</SocialWrapper>
);

export default Social;
