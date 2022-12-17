import { createApp } from 'vue'
import Mq from 'vue3-mq-lite'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap-EDIT1.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './assets/style.css'
import { MotionPlugin } from '@vueuse/motion'




const app = createApp(App)


app.use(Mq, {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400,
    xxl: Infinity,
  })

  app.use(MotionPlugin)

.mount('#app')
