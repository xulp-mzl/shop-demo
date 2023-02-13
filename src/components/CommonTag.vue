<template>
  <div id="tags">
    <el-tag
        v-for="(item, index) in tags"
        size="small"
        :key="item.path"
        :closable="item.name !== 'home'"
        :effect="$route.name === item.name ? 'dark' : 'plain'"
        @click="changeMenu(item)"
        @close="removeTag(item, index)">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CommonTag',
  data(){
    return {}
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  methods: {
    ...mapMutations(['closeTag', 'selectMenu', 'setItemIndex']),
    changeMenu(item){
      if (this.$route.name !== item.name){
        this.$router.push({name: item.name})
        this.selectMenu(item)
      }
    },
    removeTag(item, index){
      this.closeTag(item)
      const len = this.tags.length - 1
      // 假如删除的tag不是当前显示的tag，路由不做跳转
      if (this.$route.name !== item.name) return
      index = index > len ? len : index
      this.setItemIndex(index)
      this.$router.push({name: this.tags[index].name})
    }
  }
}
</script>

<style lang="less">
  #tags{
    padding: 20px 20px 0 20px;
    .el-tag{
      margin-right: 10px;
      cursor: pointer;
    }
  }
</style>
