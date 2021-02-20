import Vue from 'vue'
import App from './App.vue'
import animated from './util/animated'
import VueScrollTo from 'vue-scrollto'
import VueI18n from 'vue-i18n'
import HrefBtn from './components/HrefBtn.vue'
import './assets/css/animate.css'
import i18n from './lang'

Vue.use(VueScrollTo, { debounce: 600, offset: -200 })
Vue.use(animated, VueI18n)

Vue.config.productionTip = false
Vue.component('HrefBtn', HrefBtn)

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
