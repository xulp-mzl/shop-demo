export const admin = {
  name: 'admin',
  password: '123',
  menuData: [
    {
      path: '/',
      name: 'home',
      label: '首页',
      icon: 's-home',
      url: 'Home/Home'
    },
    {
      path: '/user',
      name: 'user',
      label: '用户管理',
      icon: 'user',
      url: 'UserManage/UserManage'
    },
    {
      name: 'other',
      label: '其他',
      icon: 'location',
      children: [
        {
          path: '/page2',
          name: 'page2',
          label: '页面2',
          icon: 'setting',
          url: 'Other/PageTwo'
        }
      ]
    }
  ]
}

export const custom = {
  name: 'xlp',
  password: '123',
  menuData: [
    {
      path: '/',
      name: 'home',
      label: '首页',
      icon: 's-home',
      url: 'Home/Home'
    },
    {
      path: '/mall',
      name: 'mall',
      label: '商品管理',
      icon: 'video-play',
      url: 'MallManage/MallManage'
    },
    {
      name: 'other',
      label: '其他',
      icon: 'location',
      children: [
        {
          path: '/page1',
          name: 'page1',
          label: '页面1',
          icon: 'setting',
          url: 'Other/PageOne'
        }
      ]
    }
  ]
}
