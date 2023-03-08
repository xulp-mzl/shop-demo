<template>
  <el-scrollbar>
    <el-menu :default-active="activeItem"
             class="el-menu-vertical-demo"
             :collapse="isCollapse"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <h3 class="menu-title">{{ isCollapse ? '后台' : '通用后台管理系统'}}</h3>

      <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name"
          @click="clickMenu(item)">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>

      <el-submenu v-for="item in hasChildren" :key="item.name" :index="item.name">
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item v-for="citem in item.children" :key="citem.name" :index="citem.name"
              @click="clickMenu(citem)">
          <span slot="title">{{citem.label}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>

// import { menuData } from '@/commondata/menuData'
import Cookie from 'js-cookie'
import routerPath from '@/commondata/routerPath'

export default {
  name: 'CommonAside',
  data() {
    return {}
  },
  methods: {
    clickMenu(item) {
      // 当前路由不是点击的path时，就跳转
      if (this.$route.path !== item.path &&
        !(this.$route.path === '/home' && item.path === '/')) {
        this.$router.push(item.path)
      }
    }
  },
  computed: {
    // 无子菜单
    noChildren() {
      return this.menuData.filter(item => !item.children)
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    menuData() {
      return this.$store.state.menu.menuData.length > 0 ? this.$store.state.menu.menuData
        : JSON.parse(Cookie.get('menuData')) || []
    },
    activeItem(){
      const route = this.$route
      const { matched } = route
      let tempMatched = [...matched]
      tempMatched = tempMatched.reverse()
      let active = ''

      const menuData = this.menuData

      tempMatched.findIndex((item) => {
        const {name} = item
        if (routerPath.indexOf(name) >= 0) {
          active = name
          menuData.findIndex((item) => {
            let selectItem = null
            if (item.children){
              item.children.findIndex(item => {
                if (item.name === name){
                  selectItem = item
                }
                return selectItem
              })
            } else {
              if (item.name === name){
                selectItem = item
              }
            }
            if (selectItem) {
              this.$store.commit('selectMenu', selectItem)
            }
            return selectItem
          })
          return true
        }
        return false
      })
      return active
    }
  },
  mounted(){

  },
  created(){
  }
}
</script>

<style lang="less">
  .el-menu-vertical-demo{
    &.el-menu{
      border: none;
    }
    &.el-menu--collapse{
      width: 64px;
    }
    width: 200px;
    min-height: 400px;
    height: 100vh;

    .menu-title{
      text-align: center;
      line-height: 48px;
      font-weight: 400;
      font-size: 16px;
      color: #fff;
    }
  }
</style>
