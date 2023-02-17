import Cookie from 'js-cookie'

const menuStore = {
  state: {
    menuData: []
  },
  mutations: {
    setMenuData(state, menuData){
      state.menuData = menuData
      Cookie.set('menuData', JSON.stringify(menuData))
      console.log(menuData)
    },
    // 动态注册路由
    addRouter(state, router){
      console.log('addRouter')
      let menu = Cookie.get('menuData')
      if (!menu) return
      menu = JSON.parse(menu)
      state.menuData = menu
      // 组装动态路由
      const routers = []
      menu.forEach(item => {
        if (item.children){
          item.children = item.children.map(item => {
            item.component = () => import('../views/' + item.url)
            return item
          })
          routers.push(...item.children)
        } else {
          item.component = () => import('../views/' + item.url)
          routers.push(item)
        }
      })
      console.log(routers)
      routers.forEach(item => {
        router.addRoute('main', item)
      })
    }
  },
  actions: {

  },
  getters: {

  }
}

export default menuStore
