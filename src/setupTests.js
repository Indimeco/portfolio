import 'jest-styled-components';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
global.IntersectionObserver = jest.fn(function() {
	this.observe = jest.fn();
	this.unobserve = jest.fn();
	this.disconnect = jest.fn();
});

configure({ adapter: new Adapter() });
