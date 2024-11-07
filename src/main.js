import './assets/main.css';
// Animation
import { MotionPlugin } from '@vueuse/motion';
import { animation } from "@/utils/vueUseMotion"
import router from './router/router'

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(MotionPlugin);
app.use(router)
app.config.globalProperties.$animation = animation;

app.mount('#app'); 
