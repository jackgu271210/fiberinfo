import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import './mock.js'

import '@/assets/css/iconfont.css'
import 'swiper/swiper-bundle.css'
import '@/assets/css/base.css'

import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'

NutUI.install(Vue);

Vue.use(VueAwesomeSwiper)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
