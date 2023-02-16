<template>
  <el-menu default-active="1-4-1"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
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
</template>

<script>

import { menuData } from '@/commondata/menuData'

export default {
  name: 'CommonAside',
  data() {
    return {
      menuData
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu(item) {
      console.log(item)
      // 当前路由不是点击的path时，就跳转
      if (this.$route.path !== item.path &&
        !(this.$route.path === '/home' && item.path === '/')) {
        this.$router.push(item.path)
      }
      this.$store.commit('selectMenu', item)
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
    }
  }
}
</script>

<style lang="less">
  .el-menu-vertical-demo{
    &.el-menu{
      border: none;
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
