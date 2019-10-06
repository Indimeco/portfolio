import styled from 'styled-components';
import { heading } from '../../UI/snippets';
import { FONT_LARGE } from '../../UI/base';
import PropTypes from 'prop-types';

import { SPACE_MEGA, SPACE_MEDIUM } from '../../UI/base';

export const Entry = styled.div`
	text-align: ${({ altStyle }) => (altStyle ? 'right' : 'left')};
	margin-bottom: ${SPACE_MEGA};
`;

Entry.propTypes = { alt: PropTypes.bool };

export const EntryText = styled.span`
	${heading};
	font-size: ${FONT_LARGE};
`;

export const EntryIcon = styled.span`
	${heading};
	margin: 0 ${SPACE_MEDIUM};
`;

export const Blink = styled.span``;
