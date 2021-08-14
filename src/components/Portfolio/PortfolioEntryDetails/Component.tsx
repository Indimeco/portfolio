import React, { useEffect, useRef } from 'react';

import { PortfolioItemName, PortfolioItemDescription, PortfolioButton } from '../Component.style';
import { FadeOnScroll, useDyingLight } from '../../UI/utils';

import {
	PortfolioItemContentHeader,
	PortfolioItemBlurb,
	PortfolioItemLink,
	PortfolioContentArea,
	PortfolioContentFooter,
} from './Component.style';

const PortfolioLight: React.FC = ({ children }) => {
	const dyingLightProps = useDyingLight();
	return (
		<PortfolioItemBlurb data-testid="portfolio-item-content-blurb" {...dyingLightProps}>
			{children}
		</PortfolioItemBlurb>
	);
};

type ParagraphContent = {
	type: 'paragraph';
	value: string;
};
type BlurbContent = {
	type: 'blurb';
	value: string;
};
type LinkContent = {
	type: 'link';
	value: {
		href: string;
		text: string;
	};
};
type PortfolioContent = ParagraphContent | BlurbContent | LinkContent;

const PortfolioContentGenerator: React.FC<PortfolioContent> = (content) => {
	switch (content.type) {
		case 'paragraph':
			return (
				<PortfolioItemDescription data-testid="portfolio-item-content-desc">
					{content.value}
				</PortfolioItemDescription>
			);
		case 'blurb':
			return <PortfolioLight>{content.value}</PortfolioLight>;
		case 'link':
			return (
				<PortfolioItemLink as="a" href={content.value.href}>
					{content.value.text}
				</PortfolioItemLink>
			);
		default:
			return null;
	}
};

const PortfolioEntryDetails: React.FC<{
	item: { name: string; description: string; content: PortfolioContent[] };
	onChange: any;
	portfolioRef: any;
}> = ({ item: { name, content }, onChange, portfolioRef }) => {
	const headingRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		headingRef?.current?.scrollIntoView();
	}, []);
	return (
		<FadeOnScroll>
			<PortfolioItemContentHeader ref={headingRef}>
				<PortfolioItemName>{name}</PortfolioItemName>
				<PortfolioButton onClick={() => onChange(false)} data-ga={name}>
					Go back
				</PortfolioButton>
			</PortfolioItemContentHeader>
			<PortfolioContentArea data-testid="portfolio-item-content">
				{content.map((c, index) => (
					// eslint-disable-next-line
					<React.Fragment key={name + index}>{PortfolioContentGenerator(c)}</React.Fragment>
				))}
			</PortfolioContentArea>
			<PortfolioContentFooter>
				<PortfolioButton
					onClick={() => {
						onChange(false);
						portfolioRef.current.scrollIntoView();
					}}
					data-ga={name}
				>
					Go back
				</PortfolioButton>
			</PortfolioContentFooter>
		</FadeOnScroll>
	);
};

export default PortfolioEntryDetails;
