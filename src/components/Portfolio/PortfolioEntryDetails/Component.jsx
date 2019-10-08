import React from 'react';
import {
	PortfolioItemName,
	PortfolioItemDescription,
	PortfolioButton,
} from '../Component.style';
import {
	PortfolioItemContentArea,
	PortfolioItemContent,
	PortfolioItemContentHeader,
	PortfolioItemBlurb,
} from './Component.style';

// TODO tests
const PortfolioContentGenerator = ({ type, value }) => {
	switch (type) {
		case 'paragraph':
			return <PortfolioItemDescription>{value}</PortfolioItemDescription>;
		case 'blurb':
			return <PortfolioItemBlurb>{value}</PortfolioItemBlurb>;
		default:
			return null;
	}
};

const PortfolioEntryDetails = ({
	item: { name, description, content },
	onChange,
	...restProps
}) => (
	<PortfolioItemContentArea>
		<PortfolioItemContentHeader>
			<PortfolioItemName>{name}</PortfolioItemName>
			<PortfolioButton onClick={() => onChange(null)}>Go back</PortfolioButton>
		</PortfolioItemContentHeader>
		<PortfolioItemDescription>{description}</PortfolioItemDescription>
		{content.map(({ type, value }, index) => (
			<PortfolioItemContent
				key={name + index}
				data-test="portfolio-item-content"
			>
				{PortfolioContentGenerator({ type, value })}
			</PortfolioItemContent>
		))}
	</PortfolioItemContentArea>
);

export default PortfolioEntryDetails;
