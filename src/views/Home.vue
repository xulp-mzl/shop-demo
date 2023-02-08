<template>
  <div class="home-container">
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
          <div class="user">
            <img :src="photo" class=""/>
            <div class="user-info">
              <p class="name">admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2023-02-07 22:30</span></p>
            <p>上次登录地点：<span>上海</span></p>
          </div>
        </el-card>

        <el-card class="table-data">
          <el-table
              :data="tableData"
              style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="100">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="70">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="order-num">
          <el-card class="num-item" v-for="item in countData" :key="item.name"
            :body-style="{display: 'flex'}">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
            <div class="detail">
              <p class="price">￥{{item.value}}</p>
              <p class="description">{{item.name}}</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import meinv from '@/assets/images/meinv.jpg'

export default {
  name: 'Home',
  data() {
    return {
      photo: meinv,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '1516 弄'
      }],
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ]
    }
  }
}
</script>

<style lang="less">
  .home-container{
    .box-card{
      .user {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;

        img{
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin-right: 40px;
        }
        .user-info{
          >.name{
            font-size: 32px;
            margin-bottom: 10px;
            text-align: center;
          }
          >.access{
            color: #999999;
            text-align: center;
          }
        }
      }

      .login-info{
        >p{
          line-height: 28px;
          font-size: 14px;
          color: #999999;
          span{
            color: #666666;
            margin-left: 30px;
          }
        }
      }
    }
    .table-data{
      margin-top: 20px;
    }

    .order-num{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: 15px;
      .num-item{
        width: 32%;
        margin-bottom: 15px;
        .el-card__body{
          padding: 10px;
        }
        .icon{
          width: 60px;
          height: 60px;
          font-size: 30px;
          color: white;
          text-align: center;
          line-height: 60px;
        }
        .detail{
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
          .price{
            font-weight: 700;
            font-size: 25px;
            margin-bottom: 10px;
            line-height: 25px;
            height: 25px;
          }
          .description{
            font-size: 14px;
            color: #999999;
            text-align: center;
          }
        }
      }
    }
  }
</style>
