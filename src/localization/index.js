import Vue from 'vue'
import VueI18n from 'vue-i18n'

// Language definitions
import enUS from './enUS.json'
const messages = {
  'en-US': enUS.messages
}
const dateTimeFormats = {
  'en-US': enUS.dateFormat
}
const numberFormats = {
  'en-US': enUS.numberFormat
}
Vue.use(VueI18n)

// Language Config
const i18n = new VueI18n({
  locale: 'en-US', // set locale
  messages, // set locale messages
  dateTimeFormats, // set date time format
  numberFormats // set number format
})

export const setLanguage = (lang) => {
  Vue.use({
    i18n: (key, value) => i18n.vm._t(key, value),
    locale: enUS
  })
}

setLanguage('en-US')
export default i18n