<template>
  <div class="home-container">
    <el-row>
      <el-col :span="8" style="padding-right: 10px;">
        <el-card class="box-card">
          <div class="user">
            <img :src="photo" class="" alt=""/>
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
      <el-col :span="16" style="padding-left: 5px;">
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

        <el-card style="height: 250px; margin-bottom: 10px;">
          <div ref="lineChart" class="line-chart" style="height: 250px;"></div>
        </el-card>

        <div class="graph">
          <el-card >
            <div ref="barChart" class="bar-chart"></div>
          </el-card>
          <el-card >
            <div ref="pieChart" class="pie-chart"></div>
          </el-card>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>

import meinv from '@/assets/images/meinv.jpg'
import * as echarts from 'echarts'

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
  },
  methods: {
    getChartOption(type){
      // 指定图表的配置项和数据
      return {
        title: {
          text: ''
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: type,
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }

  },
  mounted(){
    const echarts1 = echarts.init(this.$refs.lineChart)
    echarts1.setOption(this.getChartOption('line'))

    const echarts2 = echarts.init(this.$refs.barChart)
    echarts2.setOption(this.getChartOption('bar'))

    const echarts3 = echarts.init(this.$refs.pieChart)
    const option = {
      title: {
        /* text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center' */
      },
      tooltip: {
        trigger: 'item'
      },
      /* legend: {
        orient: 'vertical',
        left: 'left'
      }, */
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    echarts3.setOption(option)
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

    .line-chart{

    }

    .graph{
      display: flex;
      justify-content: space-between;
      .el-card{
        width: 48%;
        height: 260px;
        .bar-chart{
          height: 260px;
        }
        .pie-chart{
          height: 260px;
        }
      }
    }
  }
</style>
