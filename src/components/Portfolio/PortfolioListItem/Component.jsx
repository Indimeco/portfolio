import React from 'react';
import {
	PortfolioItemName,
	PortfolioItemDescription,
	PortfolioButton,
} from '../Component.style';
import { PortfolioItem, PortfolioThumbnail } from './Component.style';

// TODO update CRA to 2.0 to use <> syntax
const PortfolioItemDetailsButton = ({ onChange }) => (
	<PortfolioButton onClick={onChange}>View details</PortfolioButton>
);

const PortfolioItemContentPreview = ({ name, description }) => (
	<React.Fragment>
		<PortfolioItemName>{name}</PortfolioItemName>
		<PortfolioItemDescription>{description}</PortfolioItemDescription>
	</React.Fragment>
);

const PortfolioListItem = ({ item, onChange }) => (
	<PortfolioItem data-testid="portfolio-list-item">
		<PortfolioThumbnail>
			<a href={item.href}>
				<img src={item.image} alt={item.alt} />
			</a>
		</PortfolioThumbnail>

		<div>
			<PortfolioItemContentPreview
				name={item.name}
				description={item.description}
			/>
			<PortfolioItemDetailsButton onChange={onChange} />
		</div>
	</PortfolioItem>
);

export default PortfolioListItem;
