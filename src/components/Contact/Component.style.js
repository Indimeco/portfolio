import styled from 'styled-components';
import { view, indent, title } from '../UI/utils';
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
	${title};
	padding-top: ${SPACE_HUGE};
	margin-bottom: ${SPACE_HUGE};
`;
