import React, { useState } from 'react';
import { portfolio } from '../../content';
import PortfolioEntryDetails from './PortfolioEntryDetails';
import PortfolioListItem from './PortfolioListItem';
import {
	PortfolioView,
	PortfolioWrapper,
	PortfolioHeading,
} from './Component.style';
import { FadeOnScroll } from '../UI/utils';

const Portfolio = () => {
	const [active, setActive] = useState(null);

	return (
		<PortfolioView data-testid="portfolio">
			<PortfolioWrapper>
				<PortfolioHeading as="h2">
					<FadeOnScroll>Check out my projects</FadeOnScroll>
				</PortfolioHeading>
				{!active ? (
					<div>
						{portfolio.map(item => (
							<FadeOnScroll key={item.name}>
								<PortfolioListItem
									item={item}
									onChange={() => setActive(item)}
								/>
							</FadeOnScroll>
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
