import React, { useEffect, useRef, useState } from 'react';

import { portfolio } from '../../content';
import { FadeOnScroll } from '../UI/utils';

import PortfolioEntryDetails from './PortfolioEntryDetails';
import PortfolioListItem from './PortfolioListItem';
import { PortfolioView, PortfolioWrapper, PortfolioHeading } from './Component.style';

type Props = {
	title: string;
	setSectionBoundary: (pixelBoundary: number) => void;
};

const Portfolio: React.FC<Props> = ({ title, setSectionBoundary }) => {
	const [active, setActive] = useState<any>(null);
	const portfolioRef = useRef(null);
	const sectionBoundary = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const node = sectionBoundary.current;
		if (node) {
			setSectionBoundary(node.offsetHeight + node.offsetTop);
		}
	}, [setSectionBoundary, sectionBoundary, portfolioRef]);
	return (
		<PortfolioView data-testid="portfolio" ref={sectionBoundary}>
			<PortfolioWrapper>
				<PortfolioHeading as="h2" ref={portfolioRef}>
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
					<PortfolioEntryDetails item={active} onChange={setActive} portfolioRef={portfolioRef} />
				)}
			</PortfolioWrapper>
		</PortfolioView>
	);
};

export default Portfolio;
