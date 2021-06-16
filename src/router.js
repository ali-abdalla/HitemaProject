import Vue from 'vue'
import Router from 'vue-router'
import App from '../src/App.vue'
import Register from '../src/components/Register.vue'
import TodoList from '../src/components/Tache/TodoList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/todo',
      name:'Todo',
      component:TodoList
    }
  ]
})
