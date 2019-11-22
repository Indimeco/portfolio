import styled from 'styled-components';
import { heading } from '../../UI/utils';
import { WATERFALL_1, SPACE_MEGA, SPACE_LARGE } from '../../UI/base';

export const RotaryWrapper = styled.div`
	margin: ${SPACE_MEGA} 0;
`;

export const RotaryText = styled.div`
	${heading}
	margin-bottom: ${SPACE_LARGE}
	text-align: center;
`;

export const RotaryWord = styled.div`
	${heading}
	text-align: center;

	transition: opacity linear ${WATERFALL_1}ms;
	opacity: 0;

	&.fade-enter-active {
		opacity: 1;
	}
	&.fade-exit-active {
		opacity: 0;
	}
`;
