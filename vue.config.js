module.exports = {
  lintOnSave: false,
  // 处理ES6在IE浏览器错误的问题，需要转换语法的包放在这里面
  transpileDependencies: [
    'sockjs-client',
    'axios'
  ],
  // css单独提取出来
  css: {
    extract: true
  },
  // 使打包好后本地文件能访问
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  publicPath: './',
  devServer: {
    port: process.env.VUE_APP_PORT || 8080
  }
}
