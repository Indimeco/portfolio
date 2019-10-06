import React, { useState } from 'react';
import {
	PortfolioList,
	PortfolioItem,
	PortfolioItemName,
	PortfolioItemDescription,
	PortfolioItemContentArea,
	PortfolioItemContent,
	PortfolioAccordion,
	PortfolioButton,
	Thumbnail,
} from './Component.style';
import { portfolio } from '../../content';

const PortfolioItemDetailsButton = ({ onChange }) => (
	<PortfolioButton onClick={onChange}>View details</PortfolioButton>
);

const PortfolioItemPreview = ({ name, description }) => (
	<React.Fragment>
		<PortfolioItemName>{name}</PortfolioItemName>
		<PortfolioItemDescription>{description}</PortfolioItemDescription>
	</React.Fragment>
);

const PortfolioEntry = ({ item, isActive, onChange }) => (
	<PortfolioItem data-test="portfolio-item">
		<Thumbnail>
			<a href={item.href}>
				<img src={item.image} alt="alt" />
			</a>
		</Thumbnail>

		<PortfolioAccordion>
			<PortfolioItemPreview name={item.name} description={item.description} />
			<PortfolioItemDetailsButton onChange={onChange} />
			<PortfolioItemContentArea>
				{isActive &&
					item.content.map((content, index) => (
						<PortfolioItemContent
							key={item.name + index}
							data-test="portfolio-item-content"
						>
							<div>{content.blurb}</div>
							<p>{content.paragraph}</p>
						</PortfolioItemContent>
					))}
			</PortfolioItemContentArea>
		</PortfolioAccordion>
	</PortfolioItem>
);

const Portfolio = () => {
	const [active, setActive] = useState(null);

	return (
		<PortfolioList data-test="portfolio">
			{portfolio.map(item => (
				<PortfolioEntry
					item={item}
					isActive={active === item.name}
					onChange={() => setActive(active !== item.name ? item.name : null)}
					key={item.name}
				/>
			))}
		</PortfolioList>
	);
};

export default Portfolio;
