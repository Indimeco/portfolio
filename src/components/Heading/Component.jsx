import React from 'react';
import { HeaderWrapper, Title, Subtitle } from './Component.style';
import { graphql, useStaticQuery } from 'gatsby';

const Heading = () => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`);
	return (
		<HeaderWrapper>
			<Title>{data.site.siteMetadata.title}</Title>
			<Subtitle>{data.site.siteMetadata.description}</Subtitle>
		</HeaderWrapper>
	);
};

export default Heading;
