import { useRef, useEffect } from 'react';

type drawFunctionSignature = (canvas: HTMLCanvasElement, time: number) => void;
export const useCanvas = (
	drawFunction: drawFunctionSignature,
	shouldAnimate: boolean,
): [React.RefObject<HTMLCanvasElement>] => {
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = ref?.current;
		let frameId: number;

		if (canvas) {
			frameId = window.requestAnimationFrame((time: number) => drawFunction(canvas, time));
			while (shouldAnimate) {
				frameId = window.requestAnimationFrame((time: number) => drawFunction(canvas, time));
			}
		}

		return () => {
			if (frameId) window.cancelAnimationFrame(frameId);
		};
	}, [drawFunction, shouldAnimate]);

	return [ref];
};
