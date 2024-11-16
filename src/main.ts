import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'animate.css'
import router from './router/route'
import i18n from './utils/i18n'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(i18n)
    .use(router)
    .mount('#app')
