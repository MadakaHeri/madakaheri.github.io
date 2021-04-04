import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home'

Vue.use(VueRouter)

const routes = [
  ...Home,
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'hash',//'history',
  base: process.env.BASE_URL,
  routes
})

export default router
