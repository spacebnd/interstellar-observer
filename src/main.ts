import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.config.globalProperties.$twitter_widget = window.twttr
app.use(router).use(createPinia()).mount('#app')
