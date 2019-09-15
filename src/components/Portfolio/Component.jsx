import React, { useState } from 'react';
import { PortfolioList, PortfolioItem } from './Component.style';
import { data } from './data';

const PortfolioEntry = ({ item, isActive, onChange }) => (
	<PortfolioItem>
		<button onClick={onChange}>
			<h3>{item.name}</h3>
			<p>{item.description}</p>
		</button>
		<img src={item.image} alt="alt"></img>
		{isActive &&
			item.content.map((content, index) => (
				<div key={item.name + index}>
					<div>{content.blurb}</div>
					<p>{content.paragraph}</p>
				</div>
			))}
	</PortfolioItem>
);

const Portfolio = () => {
	const [active, setActive] = useState(null);

	return (
		<PortfolioList data-test="portfolio">
			{data.map(item => (
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
