import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

global.IntersectionObserver = jest.fn(function () {
	this.observe = jest.fn();
	this.unobserve = jest.fn();
	this.disconnect = jest.fn();
});
