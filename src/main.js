// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 可省略文件后缀(.vue)
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js' // 不写'/index.js'的话会自动寻找
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 等价于router: router
  // 任何子组件都可以访问store内容
  store, // 等价于store: store
  components: { App }, // ES6写法(键值相同可省略)，等价于{App:App}
  template: '<App/>' // 把App局部组件显示在页面中
})
