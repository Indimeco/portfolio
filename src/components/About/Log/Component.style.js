import styled, { keyframes } from 'styled-components';
import { heading, view, center } from '../../UI/utils';
import { FONT_LARGE } from '../../UI/base';
import PropTypes from 'prop-types';
import { SPACE_MEGA, SPACE_MEDIUM } from '../../UI/base';

export const LogView = styled.div`
	${view};
	${center};
`;

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

const blinkAnimation = keyframes`
	0% {
		opacity: 1;
	}
	20% {
		opacity: 0;
	}
	40% {
		opacity: 0;
	}
	60% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
`;

export const Blink = styled.span`
	animation: 1s ${blinkAnimation} ease-out infinite;
`;
