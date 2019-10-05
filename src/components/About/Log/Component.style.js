import styled from 'styled-components';
import { text } from '../../UI/snippets/text';
import { FONT_LARGE, FONT_HUGE } from '../../UI/base/font';
import PropTypes from 'prop-types';

import { SPACE_MEGA, SPACE_MEDIUM } from '../../UI/base/space';

export const Entry = styled.div`
	text-align: ${({ altStyle }) => (altStyle ? 'right' : 'left')};
	margin-bottom: ${SPACE_MEGA};
`;

Entry.propTypes = { alt: PropTypes.bool };

export const EntryText = styled.span`
	${text};
	font-size: ${FONT_LARGE};
`;

export const EntryIcon = styled.span`
	${text};
	margin: 0 ${SPACE_MEDIUM};
	font-size: ${FONT_HUGE};
`;

export const Blink = styled.span``;
