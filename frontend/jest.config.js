module.exports = {
	transform: {
		'^.+\\.vue$': '@vue/vue3-jest',
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.ts?$': 'ts-jest',
	},
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		customExportConditions: ['node', 'node-addons'],
	},
};
