import styled from 'styled-components';

import { text, link } from '../UI/utils';
import { FONT_SMALL, SPACE_SMALL } from '../UI/base';

export const NavigationWrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	background-color: black;
	top: 0;
	min-height: 7vh;
	margin-bottom: 0;
`;

export const NavigationItem = styled.button`
	${text};
	${link};
	color: ${({ theme }) => theme.colors.brand};
	font-size: ${FONT_SMALL};
	margin: 0;
	padding: 0 ${SPACE_SMALL};
`;
