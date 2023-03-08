import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
// import User from '@/views/User'
import Main from '@/views/Main'
// import Mall from '@/views/Mall'
// import PageOne from '@/views/PageOne'
// import PageTwo from '@/views/PageTwo'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    redirect: '/home',
    name: 'main',
    children: [
      {
        path: 'home',
        component: Home,
        name: 'home'
      }/* ,
      {
        path: 'user',
        component: User,
        name: 'user'
      },
      {
        path: 'mall',
        component: Mall,
        name: 'mall'
      },
      {
        path: 'page1',
        component: PageOne,
        name: 'page1'
      },
      {
        path: 'page2',
        component: PageTwo,
        name: 'page2'
      } */
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
]

const router = new VueRouter({
  routes
})

export default router
