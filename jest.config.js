module.exports = {
	testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
	testEnvironment: 'enzyme',
	testEnvironmentOptions: {
		enzymeAdapter: 'react16',
	},
	testURL: `http://localhost`,
	setupFiles: ['<rootDir>/loadershim.js'],
	setupFilesAfterEnv: ['jest-enzyme', '<rootDir>/jest.setup.js'],
};
