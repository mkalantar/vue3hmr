import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  fa: {
    message: {
      hello: 'سلام'
    }
  }
}

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})
createApp(App).use(i18n).mount('#app')
