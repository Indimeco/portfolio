import React, { useRef, useLayoutEffect } from 'react';

import Navigation from '../Navigation';

import { Main } from './Component.style';

const Layout: React.FC<{ setPageEnd: React.Dispatch<React.SetStateAction<number>> }> = ({
	children,
	setPageEnd,
	...restProps
}) => {
	const layoutRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (layoutRef.current) {
			setPageEnd(layoutRef.current.getBoundingClientRect().bottom);
		}
	}, [layoutRef, setPageEnd]);
	return (
		<>
			<Navigation />
			<Main {...restProps} ref={layoutRef}>
				{children}
			</Main>
		</>
	);
};

export default Layout;
