import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/api/mock'
import Cookie from 'js-cookie'

// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import { Button, Row } from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI)

// Vue.component(Button.name, Button)
// Vue.component(Row.name, Row)

// 添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  const token = Cookie.get('token')
  // token 当前用户未登入，跳转到登录页
  if (!token && to.name !== 'login'){
    next({name: 'login'})
  } else if (token && to.name === 'login'){
    next({name: 'home'})
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addRouter', router)
  }
}).$mount('#app')
