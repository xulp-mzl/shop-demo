import {menuData} from '@/commondata/menuData'

export const admin = {
  name: 'admin',
  password: '123',
  menuData: menuData
}

export const custom = {
  name: 'xlp',
  password: '123',
  menuData: [
    {
      path: '/home',
      name: 'home',
      label: '首页',
      icon: 's-home',
      url: 'Home.vue'
    },
    {
      path: '/mall',
      name: 'mall',
      label: '商品管理',
      icon: 'video-play',
      url: 'Mall.vue'
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
          url: 'PageOne.vue'
        }
      ]
    }
  ]
}
