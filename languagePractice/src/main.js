import { createApp } from 'vue';
import axios from 'axios';
import './style.css';
import App from './App.vue';
import router from '../src/router/router';


axios.defaults.baseURL = 'http://localhost:1337';


const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(router);

app.mount('#app');
