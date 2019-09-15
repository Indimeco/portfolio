import React from 'react';

export const findByTestAttr = (wrapper, attr) =>
	wrapper.find(`[data-test="${attr}"]`).hostNodes();
