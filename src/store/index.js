import Vue from 'vue'
import Vuex from 'vuex'

import tabStore from '@/store/tab'
import menuStore from '@/store/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab: tabStore,
    menu: menuStore
  }
})
