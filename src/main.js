import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import axios from 'axios';
// import { swiper } from 'swiper/element/bundle';

const app = createApp(App);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://25.35.51.16:8000';

app.use(createPinia());
app.use(router);
app.use(bootstrap);
// swiper();

app.mount('#app')
