import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import 'jest-canvas-mock';

class ResizeObserver {
	// eslint-disable-next-line
	observe() {
		// do nothing
	}

	// eslint-disable-next-line
	unobserve() {
		// do nothing
	}
}

window.ResizeObserver = ResizeObserver;

mockAllIsIntersecting(true);
