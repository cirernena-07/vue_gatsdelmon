import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('reveal', {
  mounted(element) {
    element.classList.add('reveal')

    if (!('IntersectionObserver' in window)) {
      element.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(element)
  },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
