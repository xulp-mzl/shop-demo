import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import User from '@/views/User'
import Main from '@/views/Main'
import Mall from '@/views/Mall'
import PageOne from '@/views/PageOne'
import PageTwo from '@/views/PageTwo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'user',
        component: User
      },
      {
        path: 'mall',
        component: Mall
      },
      {
        path: 'page1',
        component: PageOne
      },
      {
        path: 'page2',
        component: PageTwo
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
