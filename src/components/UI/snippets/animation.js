import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

// FIXME debounce to prevent white flashing
export const FadeOnScroll = ({ children, ...restProps }) => {
	const [ref, inView] = useInView({
		threshold: 0,
		rootMargin: '0px 0px -30% 0px',
	});
	const props = useSpring({
		opacity: inView ? 1 : 0,
		config: { mass: 5, tension: 50 },
	});

	return (
		<animated.div ref={ref} style={props} {...restProps}>
			{children}
		</animated.div>
	);
};
