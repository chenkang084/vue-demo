import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '../pages/about/about.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
