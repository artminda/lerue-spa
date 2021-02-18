import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import enLocale from './en'
import twLocale from './cn'

Vue.use(VueI18n)

const messages = {
  EN: { ...enLocale },
  CN: { ...twLocale }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'CN', // set locale
  messages // set locale messages
})

export default i18n
