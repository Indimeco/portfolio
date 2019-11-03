import React from 'react';
import { SocialWrapper, SocialLink } from './Component.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { social } from '../../../content';

export const Social = () => {
	return (
		<SocialWrapper data-testid="social">
			{social.map(({ href, icon, name }) => (
				<SocialLink key={'social' + href} href={href} aria-label={name} target="_blank">
					<FontAwesomeIcon icon={icon} />
				</SocialLink>
			))}
		</SocialWrapper>
	);
};

export default Social;
