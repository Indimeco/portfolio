import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import 'jest-canvas-mock';

mockAllIsIntersecting(true);
