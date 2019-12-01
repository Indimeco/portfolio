import styled from 'styled-components';
import { heading } from '../../UI/utils';
import { SPACE_MEGA, SPACE_LARGE } from '../../UI/base';

export const RotaryWrapper = styled.div`
	margin: ${SPACE_MEGA} 0;
`;

export const RotaryText = styled.div`
	${heading}
	margin-bottom: ${SPACE_LARGE};
	text-align: center;
`;

export const RotaryWordBoundary = styled.div`
	overflow: hidden;
	text-align: center;
`;

export const RotaryWord = styled.span`
	${heading}
	margin-bottom: 0;
	text-align: center;
	overflow: hidden;
	display: inline-block;

	transform: translate3d(0, -120px, 0);

	&.rotary-enter-active,
	&.rotary-enter-done {
		transition: transform linear
			${({ transitionTime, delay, alternate, alternateTime }) =>
				transitionTime + delay + (alternate ? alternateTime : 0)}ms;
		transform: translate3d(0, 0, 0);
	}

	&.rotary-exit,
	&.rotary-exit-active {
		transition: transform linear
			${({ transitionTime, delay, alternate, alternateTime }) =>
				transitionTime + delay + (alternate ? alternateTime : 0)}ms;
		transform: translate3d(0, 120px, 0);
	}
	&.rotary-exit-done {
		transition: none;
		transform: translate3d(0, -120px, 0);
	}
`;
