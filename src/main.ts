import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from 'pinia'
import { TwitterWidget } from '@/stores/twitter-news.store'

declare global {
  interface Window {
    twttr: TwitterWidget
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $twttr: TwitterWidget
  }
}

const app = createApp(App)
app.config.globalProperties.$twitter_widget = window.twttr
app.use(router).use(createPinia()).mount('#app')
