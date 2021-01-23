import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import zh from './zh'
export default new VueI18n({
    locale:'zh',
    messages:{ zh }
})