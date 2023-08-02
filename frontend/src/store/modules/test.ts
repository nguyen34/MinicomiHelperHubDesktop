export default {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        increment(state: any) {
            state.count++;
        }
    },
    actions: {
        increment(context: any) {
            context.commit('increment');
        }
    }
};
