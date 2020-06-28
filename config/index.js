'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    // 注意通过npm run build之后进行上线后，proxy就不生效了
    // 模拟数据，开发环境(dev)下，访问api的请求通过target中的localhost:8080（前端服务器端口）进行请求
    proxyTable: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'  // 替换路径
        }
      }
    },

    // 能访问首页，不能访问景点详情页，提问：https://coding.imooc.com/learn/questiondetail/195144.html
    // // 真实数据，本地Apache
    // proxyTable: {
    //   '/api': {
    //     target: 'localhost:80',  // 可以省略:80
    //     // 可以下面这部分，因为api映射为api路径就不必写了
    //     pathRewrite: {
    //       '^/api': '/api'  // 替换路径为F:\App_apply\webserver\apache\apply\htdocs\api
    //     }
    //   }
    // },

    // // 真实数据，服务器
    // proxyTable: {
    //   '/api': {
    //     target: '188.131.215.160:80',  // 可以省略:80
    //     // 如果api映射为 服务器/api路径就不必写下面这部分
    //     pathRewrite: {
    //       '^/api': '/Travel_api/api'  // 替换路径为/var/www/html/Travel_api/api
    //     }
    //   }
    // },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/travel', // 放到服务器的/var/www/html/travel中则改为'/travel'，默认为'/'

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
