import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'

import '@/assets/css/iconfont.css'
import 'swiper/swiper-bundle.css'
import '@/assets/css/base.css'



Vue.use(MintUI)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueAwesomeSwiper)

import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
Vue.use(element)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
