import styled from 'styled-components';
import { text } from '../UI/snippets/text';
import { FONT_LARGE, FONT_HUGE } from '../UI/base/font';
import { SPACE_MEGA, SPACE_MEDIUM } from '../UI/base/space';

export const Blurb = styled.div`
	text-align: ${({ alt }) => (alt ? 'right' : 'left')};
	margin-bottom: ${SPACE_MEGA};
`;

export const BlurbText = styled.span`
	${text};
	font-size: ${FONT_LARGE};
`;

export const BlurbIcon = styled.span`
	${text};
	margin: 0 ${SPACE_MEDIUM};
	font-size: ${FONT_HUGE};
`;
