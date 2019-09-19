import React from 'react';
import { SocialWrapper, SocialLink } from './Component.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { social } from '../../content';

//TODO aria label the icons

export const Social = () => {
	return (
		<SocialWrapper data-test="social">
			{social.map(({ href, icon }) => (
				<SocialLink key={'social' + href} href={href}>
					<FontAwesomeIcon icon={icon} />
				</SocialLink>
			))}
		</SocialWrapper>
	);
};

export default Social;
