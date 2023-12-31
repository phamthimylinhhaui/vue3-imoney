import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/tailwind.css';
import './assets/style/global.css';

import { registerGlobalComponent } from './utils/import';

const app = createApp(App);

registerGlobalComponent(app)

app.use(router);
app.mount('#app')
