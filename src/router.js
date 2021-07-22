import Vue from 'vue'
import Router from 'vue-router'
// import App from '../src/App.vue'
import Register from '../src/components/Register.vue'
import TodoList from '../src/components/Tache/TodoList.vue'
import Login from '../src/components/Inscription/Login.vue'
import Home from '../src/components/Home.vue'
import Message from '../src/components/Chat/Message.vue'
import Calendar from '../src/components/Calendar.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/todolist',
      name:'TodoList',
      component:TodoList
    },
    {
      path:'/message',
      name:'Message',
      component:Message
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/calendar',
      name:'Calendar',
      component:Calendar
    },
  ]
})
