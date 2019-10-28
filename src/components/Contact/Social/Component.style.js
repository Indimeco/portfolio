import styled from 'styled-components';
import { FONT_HERO, SPACE_SMALL } from '../../UI/base';
import { link } from '../../UI/utils';

export const SocialWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const SocialLink = styled.a`
	${link};
	font-size: ${FONT_HERO};
	margin: 0;
	padding: 0 ${SPACE_SMALL};
`;
