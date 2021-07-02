import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import firebase from 'firebase/app'

import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter)

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyCrbfVUzpEuGYmeRZwXIqykLfn4wW8pXbM",
  authDomain: "alib-c54fb.firebaseapp.com",
  databaseURL: "https://alib-c54fb-default-rtdb.firebaseio.com",
  projectId: "alib-c54fb",
  storageBucket: "alib-c54fb.appspot.com",
  messagingSenderId: "82948275570",
  appId: "1:82948275570:web:83556e7fc58189527531eb",
  measurementId: "G-NKJD4XQJ3L"
};
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
export const db = firebase.firestore()
export const todosCollection = db.collection('message');
export const queryMessage= db.collection('message')
new Vue({
  render: h => h(App),
  router,
  vuetify,
  store
}).$mount('#app')
