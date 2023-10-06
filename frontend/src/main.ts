import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axiosInstance from '@/plugins/axiosConfig';

const app = createApp(App);
app.config.globalProperties.$axios = axiosInstance;

app.use(router);
app.use(store);

app.mount('#app');
