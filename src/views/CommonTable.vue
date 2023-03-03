<template>
    <div class="common-table-component">
      <div class="c-out-wrap">
        <div class="c-search-wrap">
          <el-input></el-input>
          <el-button>1232</el-button>
        </div>
        <div class="c-table-wrap">
          <el-table
            height="100%"
            stripe
            :data="currentTableData"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="姓名"
              width="100">
            </el-table-column>

            <el-table-column
              prop="age"
              label="年龄"
              width="90">
            </el-table-column>

            <el-table-column
              prop="sex"
              label="性别"
              width="90">
              <template #default="scope">
                <span>{{scope.row.sex === 1 || scope.row.sex === '1' ? '男' : '女'}}</span>
              </template>
            </el-table-column>

            <el-table-column
              prop="birth"
              label="出生日期"
              width="180">
            </el-table-column>
            <el-table-column
              width="250"
              prop="addr"
              label="地址">
            </el-table-column>

            <el-table-column
              label="操作">
              <template>
                <el-button size="mini">编辑</el-button>
                <el-button size="mini" type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="pagination-bottom">
          <el-pagination
            layout="prev, pager, next"
            :total="50"
            :page-size="10">
          </el-pagination>
        </div>
      </div>
    </div>
</template>

<script>

import { tableData } from '@/commondata/user'

export default {
  name: 'CommonTable',
  data(){
    return {
      currentTableData: tableData
    }
  }
}
</script>

<style lang="less">
  .common-table-component{
    height: 100%;
    max-height: 100%;
    overflow-y: hidden;

    .c-out-wrap{
      height: 100%;
      display: flex;
      flex-direction: column;
      .c-search-wrap{
        flex-shrink: 0;
        display: flex;
      }
      .c-table-wrap{
        flex: 1;
        height: 100%;
        max-height: 100%;
        overflow: auto;
      }
      .pagination-bottom{
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        .el-pagination{
          button{
            height: 40px;
            line-height: 40px;
          }
          .el-pager{
            li{
              height: 40px;
              line-height: 40px;
            }
          }
        }
      }
    }
  }
</style>
