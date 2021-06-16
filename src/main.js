import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import firebase from 'firebase/app'

import VueRouter from 'vue-router'
import router from './router'
import store from './store'

Vue.use(VueRouter)

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyB6XlLI2qoCvIOI9mtop8G0P7BGp-MT8DU",
  authDomain: "project-l3dev.firebaseapp.com",
  projectId: "project-l3dev",
  storageBucket: "project-l3dev.appspot.com",
  messagingSenderId: "961662760228",
  appId: "1:961662760228:web:eac54ca66dabc26e0e6fb1",
  measurementId: "G-6WTJRDH4RN"
};
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
