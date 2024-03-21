import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './output.css';

createApp(App)
  .use(router) // Use the router
  .mount('#app');
