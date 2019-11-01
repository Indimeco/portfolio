import React, { useEffect, useRef, useState } from 'react';
import { PortfolioItemName, PortfolioItemDescription, PortfolioButton } from '../Component.style';
import {
	PortfolioItemContentHeader,
	PortfolioItemBlurb,
	PortfolioContentArea,
	sputterAnimation,
	dieAnimation,
} from './Component.style';
import { FadeOnScroll } from '../../UI/utils';

const PortfolioLight = ({ children }) => {
	const [driver, setDriver] = useState(0);
	const [seed] = useState(Math.random() * 5 + 2);

	useEffect(() => {
		const interval = setInterval(() => setDriver(driver + 1), 5000);
		return () => clearInterval(interval);
	}, [driver]);

	return (
		<PortfolioItemBlurb
			data-testid="portfolio-item-content-blurb"
			animation={driver % seed > 1 && Math.random() > 0.5 ? dieAnimation : sputterAnimation}
			seed={seed}
		>
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
		default:
			return null;
	}
};

const PortfolioEntryDetails = ({ item: { name, description, content }, onChange, ...restProps }) => {
	const headingRef = useRef(null);
	useEffect(() => {
		headingRef.current.scrollIntoView();
	}, []);
	return (
		<FadeOnScroll>
			<PortfolioItemContentHeader ref={headingRef}>
				<PortfolioItemName>{name}</PortfolioItemName>
				<PortfolioButton onClick={() => onChange(null)}>Go back</PortfolioButton>
			</PortfolioItemContentHeader>
			<PortfolioContentArea data-testid="portfolio-item-content">
				<PortfolioItemDescription>{description}</PortfolioItemDescription>
				{content.map(({ type, value }, index) => (
					<React.Fragment key={name + index}>{PortfolioContentGenerator({ type, value })}</React.Fragment>
				))}
			</PortfolioContentArea>
		</FadeOnScroll>
	);
};

export default PortfolioEntryDetails;
