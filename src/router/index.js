import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home', // 路由项名字
    component: Home // 显示Home组件
  }, {
    path: '/city',
    name: 'City',
    component: City
  }]
})
