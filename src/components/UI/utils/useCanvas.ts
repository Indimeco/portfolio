import { useRef, useEffect, useState } from 'react';

type drawFunctionSignature = (canvas: HTMLCanvasElement, vanishingPointY: number) => void;
export const useCanvas = (
	drawFunction: drawFunctionSignature,
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
			frameId = window.requestAnimationFrame(() => drawFunction(canvas, vanishingPointY));
			while (shouldAnimate) {
				frameId = window.requestAnimationFrame(() => drawFunction(canvas, vanishingPointY));
			}
		}

		return () => {
			if (frameId) window.cancelAnimationFrame(frameId);
		};
	}, [drawFunction, shouldAnimate, vanishingPointY]);

	return [ref];
};
