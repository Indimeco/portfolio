import React from 'react';
import {
	PortfolioItemName,
	PortfolioItemDescription,
	PortfolioButton,
} from '../Component.style';
import {
	PortfolioItemContentArea,
	PortfolioItemContent,
	PortfolioItemContentGrid,
} from './Component.style';

const PortfolioEntryDetails = ({
	item: { name, description, content },
	onChange,
	...restProps
}) => (
	<PortfolioItemContentArea>
		<PortfolioItemContentGrid>
			<div>
				<PortfolioItemName>{name}</PortfolioItemName>
				<PortfolioItemDescription>{description}</PortfolioItemDescription>
			</div>
			<PortfolioButton onClick={() => onChange(null)}>Go back</PortfolioButton>
		</PortfolioItemContentGrid>
		{content.map(({ blurb, paragraph }, index) => (
			<PortfolioItemContent
				key={name + index}
				data-test="portfolio-item-content"
			>
				<PortfolioItemDescription>{blurb}</PortfolioItemDescription>
				<PortfolioItemDescription>{paragraph}</PortfolioItemDescription>
			</PortfolioItemContent>
		))}
	</PortfolioItemContentArea>
);

export default PortfolioEntryDetails;
