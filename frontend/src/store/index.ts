import { createStore } from 'vuex';
import example from '@/store/modules/example';



const store = createStore({
    modules: {
        example
    }
});

export default store