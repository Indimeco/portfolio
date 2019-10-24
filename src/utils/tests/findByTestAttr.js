export const findByTestAttr = (wrapper, attr) =>
	wrapper.find(`[data-testid="${attr}"]`).hostNodes();
