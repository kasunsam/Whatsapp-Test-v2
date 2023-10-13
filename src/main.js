import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';

import vue3GoogleLogin from 'vue3-google-login';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
  clientId:
    '868383639533-1mu5ijelvme6e45tpgflm52gmkct6cuo.apps.googleusercontent.com',
});

app.mount('#app');
