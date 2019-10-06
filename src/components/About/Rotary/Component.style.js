import styled from 'styled-components';
import { heading } from '../../UI/snippets';
import { WATERFALL_1 } from '../../UI/base';

export const RotaryWrapper = styled.div``;

export const RotaryText = styled.div`
	${heading}
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
