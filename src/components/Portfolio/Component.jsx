import React, { useState } from 'react';
import { portfolio } from '../../content';
import PortfolioEntryDetails from './PortfolioEntryDetails';
import PortfolioListItem from './PortfolioListItem';
import {
	PortfolioView,
	PortfolioWrapper,
	PortfolioHeading,
} from './Component.style';

const Portfolio = () => {
	const [active, setActive] = useState(null);

	return (
		<PortfolioView data-test="portfolio">
			<PortfolioWrapper>
				<PortfolioHeading as="h2">Check out my projects</PortfolioHeading>
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
			</PortfolioWrapper>
		</PortfolioView>
	);
};

export default Portfolio;
