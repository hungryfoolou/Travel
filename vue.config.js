const path = require('path')
module.exports = {
  chainWebpack: (config) => { // config为webpack配置项
    config.resolve.alias
      .set('styles',path.join(__dirname, './src/assets/styles'))
      .set('@',path.join(__dirname, './src'))
      .set('common',path.join(__dirname, './src/common'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'  // 需要省略/public（否则出错），默认先在/public里面找json等文件
        }
      }
    }
  }
}