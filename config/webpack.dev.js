
let path = require('path');//node的模块
module.exports = {
  entry:'./src/main.js', // 入口
  output:{
    filename:'[name].js',
    // 这个路径必须是绝对路径
    path: path.resolve('./dist')
  }, // 出口
  devServer:{
    contentBase:'./dist',
    port:8080,
    compress:true,// 服务器压缩
    open:true,// 自动打开浏览器
    // hot:true//热更新
  },// 开发服务器
  module:{}, // 模块配置
  plugins:[], // 插件的配置
  mode:'development', // 可以更改模式
  resolve:{}, // 配置解析
}
