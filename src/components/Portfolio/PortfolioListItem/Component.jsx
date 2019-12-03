import React from 'react';
import { PortfolioItemName, PortfolioItemDescription, PortfolioButton } from '../Component.style';
import { PortfolioItem, PortfolioThumbnail } from './Component.style';

// TODO update CRA to 2.0 to use <> syntax
const PortfolioItemDetailsButton = ({ onChange, ...restProps }) => (
	<PortfolioButton onClick={onChange} {...restProps}>
		View details
	</PortfolioButton>
);

const PortfolioItemContentPreview = ({ name, description }) => (
	<React.Fragment>
		<PortfolioItemName>{name}</PortfolioItemName>
		<PortfolioItemDescription>{description}</PortfolioItemDescription>
	</React.Fragment>
);

const PortfolioListItem = ({ item, onChange, index }) => (
	<PortfolioItem data-testid="portfolio-list-item">
		<PortfolioThumbnail>
			<img src={item.image} alt={item.alt} />
		</PortfolioThumbnail>

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
