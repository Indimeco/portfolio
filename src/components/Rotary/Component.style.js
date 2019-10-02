import styled from 'styled-components';
import { heading } from '../UI/snippets/heading';
import { WATERFALL_1 } from '../UI/base/animations';

export const RotaryWrapper = styled.div`
	.fade-enter {
		opacity: 0;
	}
	.fade-enter-active {
		opacity: 1;
		transition: opacity linear ${WATERFALL_1}ms;
	}
	.fade-leave {
		opacity: 1;
	}
	.fade-leave-active {
		opacity: 0;
		transition: opacity linear ${WATERFALL_1}ms;
	}
`;

export const RotaryText = styled.div`
	${heading}
	text-align: center;
`;

export const RotaryWord = styled.div`
	${heading}
	text-align: center;
`;
