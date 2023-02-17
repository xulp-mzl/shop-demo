export const menuData = [
  {
    path: '/',
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
    path: '/user',
    name: 'user',
    label: '用户管理',
    icon: 'user',
    url: 'User.vue'
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
        url: 'PageOne1.vue'
      },
      {
        path: '/page2',
        name: 'page2',
        label: '页面2',
        icon: 'setting',
        url: 'PageTwo.vue'
      }
    ]
  }
]
