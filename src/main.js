import './assets/main.css';
// Animation
import { MotionPlugin } from '@vueuse/motion';
import { animation } from "@/utils/vueUseMotion"

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(MotionPlugin);
app.config.globalProperties.$animation = animation;

app.mount('#app'); 
