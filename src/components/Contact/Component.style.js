import styled from 'styled-components';
import { view, indent, heading } from '../UI/snippets';
import { SPACE_HUGE } from '../UI/base';

export const ContactView = styled.div`
	${view};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const ContactWrapper = styled.div`
	${indent};
`;

export const ContactHeading = styled.h2`
	${heading};
	margin-top: ${SPACE_HUGE};
`;
