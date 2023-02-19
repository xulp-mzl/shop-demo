module.exports = {
  lintOnSave: false,
  // 处理ES6在IE浏览器错误的问题，需要转换语法的包放在这里面
  transpileDependencies: [
    'sockjs-client',
    'axios'
  ]
}
