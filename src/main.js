import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n/index'
import Storage from 'vue-ls';
import navbar from '@/components/Navbar.vue'
import ElementUI from 'element-ui'

import './global.js'
import '../src/assets/cssreset.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Storage, options);
Vue.component('navbar', navbar)
Vue.config.productionTip = false

let options = {
  namespace: 'vuejs__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local', // storage name session, local, memory
};

new Vue({
  router,
  store,i18n,
  render: h => h(App)
}).$mount('#app')
