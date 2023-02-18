<template>
  <el-container>
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <common-tag></common-tag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import CommonTag from '@/components/CommonTag'
import {getData} from '@/api/index'

export default {
  name: 'Main',
  data() {
    return {}
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  },
  mounted() {
    getData().then(msg => {
      console.log(msg)
    })
  }
}
</script>

<style lang="less">
  .el-container{
    .el-header {
      padding: 0;
    }
    .el-container{
      height: 100vh;
      max-height: 100vh;
      overflow-y: auto;
    }
  }
</style>
