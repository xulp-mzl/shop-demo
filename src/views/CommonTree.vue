<template>
  <div class="common-tree-container">
      <div class="left-container-wrap">
        <div class="search-input-wrap">
          <el-input size="small" v-model="condition" clearable></el-input>
          <div class="btn-wrap">
            <el-button size="small" circle type="primary" icon="el-icon-search" @click="filterTreeData"/>
            <i :class="[treeExpand ? 'el-icon-remove' : 'el-icon-circle-plus', 'expand-tree']" @click="changeTreeExpand"></i>
          </div>
        </div>
        <el-scrollbar>
          <el-tree
            ref="tree"
            :data="data"
            :props="defaultProps"
            :default-expand-all="treeExpand"
            highlight-current
            :filter-node-method="filterNode"
            @node-click="handleNodeClick"></el-tree>
        </el-scrollbar>
      </div>
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
      },
      condition: '',
      treeExpand: false
    }
  },
  methods: {
    handleNodeClick(data, d, t) {
      console.log(data, d, t)
    },
    filterNode(value, data){
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    filterTreeData(){
      this.$refs.tree.filter(this.condition.trim())
    },
    changeTreeExpand(){
      this.treeExpand = !this.treeExpand
      this.changeTreeNodeStatus(this.$refs.tree.store.root)
    },
    // 改变节点的状态(展开，收起)
    changeTreeNodeStatus(node) {
      node.expanded = this.treeExpand
      for (let i = 0; i < node.childNodes.length; i++) {
        // 改变节点的自身expanded状态
        node.childNodes[i].expanded = this.treeExpand
        // 遍历子节点
        if (node.childNodes[i].childNodes.length > 0) {
          this.changeTreeNodeStatus(node.childNodes[i])
        }
      }
    }
  }
}
</script>

<style lang="less">
  .common-tree-container{
    height: 100%;
    display: flex;
    .left-container-wrap{
      position: relative;
      width: 200px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      .search-input-wrap{
        padding: 0 5px 5px 5px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .el-input__inner{
          padding: 0 5px;
        }
        .btn-wrap{
          margin-left: 5px;
          display: flex;
          flex-shrink: 0;
          align-items: center;
          .expand-tree{
            color: #cccccc;
            font-size: 25px;
            margin-left: 5px;
            cursor: pointer;
          }
        }
      }
      .el-scrollbar{
        flex: 1;
        background-color: #f0f0f0;
        .el-scrollbar__wrap{
          overflow-x: hidden;
          .el-tree{
            background-color: #f0f0f0;
          }
        }
      }
    }

    .right-data{
      flex: 1;
    }
  }
</style>
