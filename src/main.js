import Vue from 'vue'
import App from './App.vue'
import animated from './util/animated'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScrollTo from 'vue-scrollto'
import VueI18n from 'vue-i18n'
import HrefBtn from './components/HrefBtn.vue'
import './assets/css/animate.css'

Vue.use(VueScrollTo, { debounce: 600 })
Vue.use(animated, VueI18n, VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.component('HrefBtn', HrefBtn)

new Vue({
  render: h => h(App)
}).$mount('#app')
