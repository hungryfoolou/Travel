import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'

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
  }, {
    path: '/detail/:id', // :id动态路由，参数会放到id这个变量中
    name: 'Detail',
    component: Detail
  }]
})
