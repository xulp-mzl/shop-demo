import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import { Button, Row } from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI)

// Vue.component(Button.name, Button)
// Vue.component(Row.name, Row)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
