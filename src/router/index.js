import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Resolve from '../pages/Resolve'
import Result from '../pages/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resolve',
      name: 'Resolve',
      component: Resolve
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
