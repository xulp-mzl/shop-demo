<template>
  <div class="common-tree-container">
    <el-scrollbar>
      <el-tree :data="data" :props="defaultProps" default-expand-all @node-click="handleNodeClick"></el-tree>
    </el-scrollbar>
    <div class="right-data">
      <div class="data-tab-option">2245</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import treeData from '@/commondata/treeData'

export default {
  name: 'CommonTree.vue',
  data(){
    return {
      data: treeData,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="less">
  .common-tree-container{
    height: 100%;
    display: flex;
    .el-scrollbar{
      .el-scrollbar__wrap{
        overflow-x: hidden;
        .el-tree{
          height: 100%;
          width: 200px;
          flex-shrink: 0;
          background-color: #f0f0f0;
        }
      }
    }

    .right-data{
      flex: 1;
    }
  }
</style>
