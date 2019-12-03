import React, { useState } from 'react';
import { portfolio } from '../../content';
import PortfolioEntryDetails from './PortfolioEntryDetails';
import PortfolioListItem from './PortfolioListItem';
import { PortfolioView, PortfolioWrapper, PortfolioHeading } from './Component.style';
import { FadeOnScroll } from '../UI/utils';

const Portfolio = ({ title }) => {
	const [active, setActive] = useState(null);

	return (
		<PortfolioView data-testid="portfolio">
			<PortfolioWrapper>
				<PortfolioHeading as="h2">
					<FadeOnScroll>{title}</FadeOnScroll>
				</PortfolioHeading>
				{!active ? (
					<div>
						{portfolio.map((item, index) => (
							<FadeOnScroll key={item.name}>
								<PortfolioListItem item={item} onChange={() => setActive(item)} index={index} />
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
