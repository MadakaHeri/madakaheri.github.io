import Home from '../views/Home'
export default [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile" */ '../views/Home/Profile')
      },
      // {
      //   path: '/posts',
      //   name: 'Posts',
      //   component: () => import(/* webpackChunkName: "blog" */ '../views/Home/Posts')
      // },
      {
        path: 'sns',
        name: 'SNS',
        component: () => import(/* webpackChunkName: "sns" */ '../views/Home/Sns')
      },
      {
        path: 'credits',
        name: 'Credits',
        component: () => import(/* webpackChunkName: "credits" */ '../views/Home/Credits')
      },
    ],
  },
]