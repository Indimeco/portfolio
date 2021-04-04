import { useRef, useEffect, useState } from 'react';

import { composition } from './drawings';

export const useCanvas = (shouldAnimate: boolean): [React.RefObject<HTMLCanvasElement>] => {
	const ref = useRef<HTMLCanvasElement>(null);
	const [vanishingPointY, setVanishingPointY] = useState(0);

	function handleScroll() {
		setVanishingPointY(window.scrollY);
	}

	useEffect(() => {
		const canvas = ref?.current;
		let frameId: number;
		document.addEventListener('scroll', handleScroll);

		if (canvas) {
			frameId = window.requestAnimationFrame(() => composition(canvas, vanishingPointY));

			// while (shouldAnimate) {
			// 	frameId = window.requestAnimationFrame(() =>
			// 		pipe(() => composeDrawings(canvas, vanishingPointY), drawFunction),
			// 	);
			// }
		}

		return () => {
			if (frameId) window.cancelAnimationFrame(frameId);
		};
	}, [shouldAnimate, vanishingPointY]);

	return [ref];
};
