
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import i18n from './utils/i18n';
import router from './router/route';
import { initLocale } from './utils';

import 'animate.css';
import './assets/styles/main.css';
const main = async () => {
    const app = createApp(App);

    // 初始化语言
    try {
        await initLocale();
    } catch (error) {
        console.log(`[main.ts] Language initalization failed:`, error);
    }

    app.use(createPinia());
    app.use(router);
    app.use(i18n);

    app.mount('#app');
}

main();