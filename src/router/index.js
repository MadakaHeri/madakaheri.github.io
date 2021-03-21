import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Posts')
  },
  {
    path: '/sns',
    name: 'SNS',
    component: () => import(/* webpackChunkName: "sns" */ '../views/Sns')
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import(/* webpackChunkName: "credits" */ '../views/Credits')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
