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
		document.addEventListener('scroll', handleScroll);

		if (canvas) {
			draw(canvas, vanishingPointY, landmarks);
		}

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [vanishingPointY, landmarks, draw]);

	return [ref];
};
