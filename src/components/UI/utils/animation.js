import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { keyframes, css } from 'styled-components';
import { offLight, onLight } from './typography';

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

export const sputterAnimation = ({ theme }) => {
	const onStyle = onLight({ theme });
	const offStyle = offLight({ theme });

	return keyframes`
		40% {
			${onStyle};
		}
		41% {	
			${offStyle};
		}
		42% {
			${onStyle};
		}
		43% {
			${offStyle};
		}
		44% {
			${onStyle};
		}
	`;
};

export const dieAnimation = ({ theme }) => {
	const onStyle = onLight({ theme });
	const offStyle = offLight({ theme });

	return keyframes`
		69% {
			${onStyle};
		}
		70% {
			${offStyle};
		}
		97% {
			${offStyle};
		}
		98% {
			${onStyle};
		}
		99% {
			${offStyle};
		}
		100% {
			${onStyle};
		}
	`;
};

export const dyingLightStyles = ({ theme }) => css`
	${onLight({ theme })};
	animation: ${({ seed }) => seed}s ${({ animation }) => animation} step-end infinite;
	color: ${({ theme }) => theme.colors.aux};
`;

export const useDyingLight = () => {
	const [driver, setDriver] = useState(0);
	const [seed] = useState(Math.random() * 5 + 2);

	useEffect(() => {
		const interval = setInterval(() => setDriver(driver + 1), 5000);
		return () => clearInterval(interval);
	}, [driver]);

	return {
		animation: driver % seed > 1 && Math.random() > 0.5 ? dieAnimation : sputterAnimation,
		seed: seed,
	};
};
