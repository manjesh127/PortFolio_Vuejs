import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Data from './views/Data.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/blockchain_data',
      name: 'Data',
      component: Data
    },
  ]
})