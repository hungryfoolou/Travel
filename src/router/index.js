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
    path: '/detail/:id', // :id的冒号表示动态路由，Recommend.vue的代码':to="'/detail/' + item.id"'的id会传递到id这个变量中
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 } // 新显示的页面x轴、y轴初始值为0
  }
})
