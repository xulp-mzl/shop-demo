import Mock from 'mockjs'

// 定义mock请求拦截
Mock.mock('/api/home/getData', function() {
  console.log('拦截到了')
  return []
})
