import example from '../modules/example';
import { createStore } from 'vuex';

describe('Example Module Store Test', () => {
	let store;
	let mockExample;
	let mockActions = {
		increment: jest.fn(),
		decrement: jest.fn(),
	};

	beforeEach(() => {
		mockExample = {
			...example,
			actions: mockActions,
		};
		store = createStore(mockExample);
		store.state.count = 0;
	});

	it('test initial state', () => {
		expect(store.state.count).toBe(0);
	});

	it('test increment', () => {
		store.commit('increment');
		expect(store.state.count).toBe(1);
	});

	it('test decrement', () => {
		store.commit('decrement');
		expect(store.state.count).toBe(-1);
	});
});
