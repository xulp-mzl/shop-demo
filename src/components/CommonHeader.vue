<template>
  <div class="common-header">
    <div class="left-container">
      <el-button icon="el-icon-menu" size="mini"></el-button>
      <!-- 面包屑-->
    </div>

    <div class="right-container">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="photo" class="custom-photo"/>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

import meinv from '@/assets/images/meinv.jpg'

export default {
  name: 'CommonHeader',
  data() {
    return {
      photo: meinv
    }
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
