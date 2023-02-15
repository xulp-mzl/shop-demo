<template>
  <div id="user-container">
    <el-dialog
      title="用户信息"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="50%"
      :before-close="handleClose">

      <el-form ref="form" :model="form" label-width="80px" :inline="true" :rules="rules"
        :status-icon="true"
        label-position="right">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker
            v-model="form.birth"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="出生日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="submitForm">确 定</el-button>
        </span>
      </template>
    </el-dialog>

    <div class="manage-header">
      <el-button type="primary" size="small" @click="openDialog">+ 新增</el-button>
    </div>

    <div class="common-table">
      <el-table
        height="90%"
        :data="currentTableData"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
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
          prop="addr"
          label="地址">
        </el-table-column>

        <el-table-column
          label="操作"
          width="180">
          <template #default="scope">
            <el-button size="mini" @click="editUser(scope.row)">编辑</el-button>
            <el-button size="mini" @click="delUser(scope.row)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-bottom">
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          :page-size="pageSize"
          @current-change="changePage">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

import { tableData } from '@/commondata/user'

export default {
  name: 'User',
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: '',
        id: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ],
        birth: [
          { required: true, message: '请选择生日日期' }
        ],
        addr: [
          { required: true, message: '请输入地址' }
        ]
      },
      tableData: tableData,
      modelType: 0,
      pageSize: 10,
      currentPage: 1
    }
  },
  methods: {
    openDialog(){
      this.dialogVisible = true
      this.modelType = 0
    },
    submitForm(){
      this.$refs.form.validate(validate => {
        if (validate){
          if (this.modelType === 0){
            let index = 0
            let id
            while (index !== -1){
              id = Math.floor(Math.random() * 200) + 4
              index = this.tableData.findIndex(item => item.id === id)
            }
            this.form.id = id
            console.log(this.form.birth)
            this.tableData.push({...this.form})
          } else {
            const index = this.tableData.findIndex(item => item.id === this.form.id)
            if (index !== -1){
              this.tableData.splice(index, 1, {...this.form})
            }
          }
          this.dialogVisible = false
          this.handleClose()
        }
      })
    },
    handleClose(done){
      this.$refs.form.resetFields()
      if (typeof done === 'function') done()
    },
    cancel(){
      this.dialogVisible = false
      this.handleClose()
    },
    editUser(user){
      this.modelType = 1
      this.dialogVisible = true
      // 对当前的数据进行深拷贝
      this.form = JSON.parse(JSON.stringify(user))
    },
    delUser(user){
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const index = this.tableData.findIndex(item => item.id === user.id)
        if (index !== -1){
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    changePage(val){
      this.currentPage = val
      this.getCurrentTableData()
    },
    getCurrentTableData(){
      const startIndex = (this.currentPage - 1) * this.pageSize
      this.currentTableData = this.tableData.slice(startIndex, startIndex + this.pageSize)
    }
  },
  computed: {
    total(){
      return this.tableData.length
    },
    currentTableData: {
      get(){
        const startIndex = (this.currentPage - 1) * this.pageSize
        return this.tableData.slice(startIndex, startIndex + this.pageSize)
      },
      set(v) {}
    }
  },
  created(){

  }
}
</script>

<style lang="less">
  #user-container{
    height: 98%;
    .manage-header{
      margin-bottom: 10px;
    }
    .common-table{
      position: relative;
      height: calc(100% - 62px);

      .el-table::before{
        color: white;
        background-color: white;
      }
      .pagination-bottom{
        position: absolute;
        bottom: 0;
        right: 20px;
      }
    }
  }
</style>
