import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import 'animate.css'
import router from './router/route'

const pinia = createPinia()

const i18n = createI18n({
    // something vue-i18n options here ...
  })

createApp(App)
    .use(pinia)
    .use(router)
    .use(i18n)
    .mount('#app')
