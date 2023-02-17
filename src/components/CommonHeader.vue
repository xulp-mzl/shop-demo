<template>
  <div class="common-header">
    <div class="left-container">
      <el-button icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
      <!-- 面包屑-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in tags" :key="item.path" :to="{ path: item.path }" :class="itemIndex === index ? 'white': ''">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="right-container">
      <el-dropdown @command="handleClick">
        <span class="el-dropdown-link">
          <img :src="photo" class="custom-photo"/>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

import meinv from '@/assets/images/meinv.jpg'
import {mapState} from 'vuex'
import Cookie from 'js-cookie'

export default {
  name: 'CommonHeader',
  data() {
    return {
      photo: meinv
    }
  },
  methods: {
    collapseMenu(){
      this.$store.commit('setCollapse')
    },
    handleClick(command){
      console.log(command)
      if (command === 'logout'){
        // 清除cookie
        Cookie.remove('token')
        Cookie.remove('menuData')
        // 跳转到登入页面
        this.$router.push({name: 'login'})
      }
    }
  },
  computed: {
    // 结构数据
    ...mapState({
      tags: state => state.tab.tabsList,
      itemIndex: state => state.tab.itemIndex
    })
  },
  mounted(){
    console.log(this.itemIndex)
  }
}
</script>

<style lang="less">
  .common-header{
    height: 60px;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .el-button{
      padding-left: 10px;
      padding-right: 10px;
    }

    .left-container{
      display: flex;
      align-items: center;
      .el-breadcrumb{
        margin-left: 10px;
        .el-breadcrumb__item{
          font-weight: normal;
          .el-breadcrumb__inner{
            &.is-link{
              color: #666666;
            }
          }
          &.white{
            .el-breadcrumb__inner{
              &.is-link{
                color: white;
              }
            }
          }
        }
      }
    }

    .right-container {
      .custom-photo{
        border-radius: 50%;
        cursor: pointer;
        width: 40px;
        height: 40px;
      }
    }
  }
</style>
