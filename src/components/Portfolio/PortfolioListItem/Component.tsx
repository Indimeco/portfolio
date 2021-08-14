import React, { HTMLAttributes } from 'react';

import { PortfolioItemName, PortfolioItemDescription, PortfolioButton } from '../Component.style';

import { PortfolioItem, PortfolioThumbnail } from './Component.style';

const PortfolioItemDetailsButton: React.FC<
	{ onChange: (e: React.MouseEvent) => void } & Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'>
> = ({ onChange, ...restProps }) => (
	<PortfolioButton onClick={onChange} {...restProps}>
		View details
	</PortfolioButton>
);

const PortfolioItemContentPreview: React.FC<{ name: string; description: string }> = ({
	name,
	description,
}) => (
	<>
		<PortfolioItemName>{name}</PortfolioItemName>
		<PortfolioItemDescription>{description}</PortfolioItemDescription>
	</>
);

const PortfolioListItem: React.FC<{
	item: { name: string; description: string; image: string; alt: string };
	onChange: (e: React.MouseEvent) => void;
	index: number;
}> = ({ item, onChange, index }) => (
	<PortfolioItem data-testid="portfolio-list-item">
		<PortfolioThumbnail src={item.image} alt={item.alt} />

		<div>
			<PortfolioItemContentPreview name={item.name} description={item.description} />
			<PortfolioItemDetailsButton
				onChange={onChange}
				id={`portfolio-list-item-button-${index}`}
				data-ga={item.name}
			/>
		</div>
	</PortfolioItem>
);

export default PortfolioListItem;
