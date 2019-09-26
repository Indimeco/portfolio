import styled from 'styled-components';
import { Heading } from '../UI/Heading';

export const HeaderWrapper = styled.header`
	text-align: center;
`;
export const Title = styled.h1`
	${Heading}
	font-size: ${({ theme }) => theme.fonts.hero};
	font-weight: 600;
	margin-bottom: ${({ theme }) => theme.spacing.small};
	margin-top: 0;
`;

export const Subtitle = styled.span`
	${Heading}
	margin-bottom: ${({ theme }) => theme.spacing.small};
`;
