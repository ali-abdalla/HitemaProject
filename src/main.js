import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter)

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router,
  vuetify,
  store
}).$mount('#app')
