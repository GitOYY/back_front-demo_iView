import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login/login'
import home from '@/components/home/home'
import welcome from '@/components/welcome'
import layout from '@/components/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '',
          component: welcome,
          meta: []
        },
        {
          path: '/home',
          component: home,
          meta: []
        }
      ]
    }
  ]
})
