import { useRef, useEffect, useState } from 'react';

import { DrawingSetup } from './drawing';

export const useCanvas = (
	draw: DrawingSetup,
	drawVars: any,
	shouldAnimate: boolean,
): [React.RefObject<HTMLCanvasElement>] => {
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
			frameId = window.requestAnimationFrame(() => draw(canvas, vanishingPointY, drawVars));

			while (shouldAnimate) {
				frameId = window.requestAnimationFrame(() => draw(canvas, vanishingPointY, drawVars));
			}
		}

		return () => {
			if (frameId) window.cancelAnimationFrame(frameId);
		};
	}, [shouldAnimate, vanishingPointY]);

	return [ref];
};
