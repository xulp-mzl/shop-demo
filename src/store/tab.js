const tabStore = {
  state: {
    isCollapse: false, // 控制菜单收起还是折叠
    // 面包屑
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home'
      }
    ],
    itemIndex: 0
  },
  mutations: {
    setCollapse(state){
      state.isCollapse = !state.isCollapse
    },
    selectMenu(state, val){
      state.itemIndex = 0
      if (val.name !== 'home'){
        const index = state.tabsList.findIndex(item => item.name === val.name)
        if (index === -1) state.tabsList.push(val)
        state.itemIndex = index === -1 ? state.tabsList.length - 1 : index
      }
    },
    closeTag(state, val){
      const index = state.tabsList.findIndex(item => item.name === val.name)
      // 删除数组中的数据，第一个参数，是删除数据的位置，第二个参数是要删除数据的个数
      state.tabsList.splice(index, 1)
    },
    setItemIndex(state, index){
      state.itemIndex = index
      console.log(index + '4')
    }
  },
  actions: {

  },
  getters: {

  }
}

export default tabStore
