import Vue from 'vue'
import App from './App' // 可省略文件后缀(.vue)
import router from './router'
// import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill' // 有的低版本Android手机的浏览器不支持promises
import store from './store/index.js' // 不写'/index.js'的话会自动寻找
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

/* 为src/assets/styles/reset.css添加touch-action: manipulation;即可,
参考:developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away */
// fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

new Vue({
  router, // 等价于router: router
  // 任何子组件都可以访问store内容
  store, // 等价于store: store
  render: h => h(App)
}).$mount('#app')
