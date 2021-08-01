import { useRef, useEffect } from 'react';

import { DrawingSetup } from './drawings';

export const useCanvas = (draw: DrawingSetup, landmarks: any): [React.RefObject<HTMLCanvasElement>] => {
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		function render() {
			const canvas = ref?.current;
			if (canvas) {
				draw(canvas, landmarks);
			}
		}
		render();
		document.addEventListener('scroll', render);

		return () => {
			document.removeEventListener('scroll', render);
		};
	}, [landmarks, draw]);

	return [ref];
};
