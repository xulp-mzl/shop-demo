<template>
  <div class="login-container">
    <el-form ref="form"
             :model="loginForm"
             label-width="70px"
             :status-icon="true"
             label-position="right"
             :rules="rules">
      <h3 class="login-title">系统登入</h3>
      <el-form-item label="账号：" prop="name">
        <el-input v-model="loginForm.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item class="submit-btn">
        <el-button type="primary" @click="userLogin">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import Mock from 'mockjs'
import Cookie from 'js-cookie'

import {admin, custom} from '@/commondata/loginUser'

export default {
  name: 'Login',
  data(){
    return {
      loginForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    userLogin(){
      this.$refs.form.validate(validate => {
        if (validate){
          if (this.loginForm.password === admin.password &&
            this.loginForm.name === admin.name){
            this.loginAfterDeal(admin)
          } else if (this.loginForm.password === custom.password &&
            this.loginForm.name === custom.name){
            this.loginAfterDeal(custom)
          } else {
            this.$message.error('账号或密码错误，请重新输入！')
          }
          console.log(custom, admin)
        }
      })
    },
    loginAfterDeal(userData){
      const token = Mock.Random.guid()
      Cookie.set('token', token)
      this.$router.push({name: 'home'})
      this.$store.commit('setMenuData', userData.menuData)
      this.$store.commit('addRouter', this.$router)
    }
  }
}
</script>

<style lang="less">
  .login-container{
    width: 350px;
    border: 1px solid #eaeaea;
    border-radius: 15px;
    background-color: #fff;
    background-clip: padding-box;
    padding: 35px 35px 15px 35px;
    box-shadow: 0 0 25px #cac6c6;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .login-title{
      text-align: center;
      margin-bottom: 20px;
      color: #505458;
    }
    .submit-btn{
      text-align: center;
      .el-form-item__content{
        margin-left: 0!important;
        .el-button{
          margin-top: 10px;
        }
      }
    }
  }
</style>
