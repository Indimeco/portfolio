import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export const FadeOnScroll = ({ children, ...restProps }) => {
	const [debouncedInView, setDebouncedInView] = useState(false);

	/* 
		this useInView config makes the item appear when any % of it is within 30% of the bottom of the viewport. 
		It works best with small view boxes for this reason.
	*/
	const [ref, inView] = useInView({
		threshold: 0,
		rootMargin: '0px 0px -30% 0px',
	});

	const props = useSpring({
		opacity: debouncedInView ? 1 : 0,
		config: { mass: 5, tension: 50 },
	});

	useEffect(() => {
		const inViewDelay = inView === true ? 0 : 3000; // only debounce fades, not appears
		const timeo = setTimeout(() => setDebouncedInView(inView), inViewDelay);

		return () => clearTimeout(timeo);
	}, [inView]);

	return (
		<animated.div ref={ref} style={props} {...restProps}>
			{children}
		</animated.div>
	);
};
