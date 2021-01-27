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

const PortfolioLight = ({ children }) => {
	const dyingLightProps = useDyingLight();
	return (
		<PortfolioItemBlurb data-testid="portfolio-item-content-blurb" {...dyingLightProps}>
			{children}
		</PortfolioItemBlurb>
	);
};

const PortfolioContentGenerator = ({ type, value }) => {
	switch (type) {
		case 'paragraph':
			return (
				<PortfolioItemDescription data-testid="portfolio-item-content-desc">{value}</PortfolioItemDescription>
			);
		case 'blurb':
			return <PortfolioLight>{value}</PortfolioLight>;
		case 'link':
			return <PortfolioItemLink href={value.href}>{value.text}</PortfolioItemLink>;
		default:
			return null;
	}
};

const PortfolioEntryDetails = ({
	item: { name, description, content },
	onChange,
	portfolioRef,
	...restProps
}) => {
	const headingRef = useRef(null);
	useEffect(() => {
		headingRef.current.scrollIntoView();
	}, []);
	return (
		<FadeOnScroll>
			<PortfolioItemContentHeader ref={headingRef}>
				<PortfolioItemName>{name}</PortfolioItemName>
				<PortfolioButton onClick={() => onChange(false)} id="portfolio-entry-details-back" data-ga={name}>
					Go back
				</PortfolioButton>
			</PortfolioItemContentHeader>
			<PortfolioContentArea data-testid="portfolio-item-content">
				<PortfolioItemDescription>{description}</PortfolioItemDescription>
				{content.map(({ type, value }, index) => (
					<React.Fragment key={name + index}>{PortfolioContentGenerator({ type, value })}</React.Fragment>
				))}
			</PortfolioContentArea>
			<PortfolioContentFooter>
				<PortfolioButton
					onClick={() => {
						onChange(false);
						portfolioRef.current.scrollIntoView();
					}}
					id="portfolio-entry-details-back"
					data-ga={name}
				>
					Go back
				</PortfolioButton>
			</PortfolioContentFooter>
		</FadeOnScroll>
	);
};

export default PortfolioEntryDetails;
