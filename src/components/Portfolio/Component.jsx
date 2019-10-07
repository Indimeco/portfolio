import React, { useState } from 'react';
import { portfolio } from '../../content';
import PortfolioEntryDetails from './PortfolioEntryDetails';
import PortfolioListItem from './PortfolioListItem';

const Portfolio = () => {
	const [active, setActive] = useState(null);

	return (
		<div data-test="portfolio">
			{!active ? (
				<div>
					{portfolio.map(item => (
						<PortfolioListItem
							item={item}
							onChange={() => setActive(item)}
							key={item.name}
						/>
					))}
				</div>
			) : (
				<PortfolioEntryDetails item={active} onChange={setActive} />
			)}
		</div>
	);
};

export default Portfolio;
