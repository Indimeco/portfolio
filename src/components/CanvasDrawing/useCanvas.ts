import { useRef, useEffect, useState } from 'react';

import { DrawingSetup } from './drawings';

export const useCanvas = (draw: DrawingSetup, landmarks: any): [React.RefObject<HTMLCanvasElement>] => {
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
			frameId = window.requestAnimationFrame(() => draw(canvas, vanishingPointY, landmarks));
		}

		return () => {
			if (frameId) window.cancelAnimationFrame(frameId);
		};
	}, [vanishingPointY, landmarks, draw]);

	return [ref];
};
