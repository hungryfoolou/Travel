<template>
  <div>
    <home-header :city="city"></home-header> <!--template中用短横线写法-->
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader, // 声明局部组件
    HomeSwiper, // 等价于HomeSwiper: HomeSwiper，ES6语法，键值相同可简写
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      // 请求/static/mock/中模拟的ajax数据（配置config/index.js实现了/api/路径数据的转发）
      axios.get('/api/index.json') // 返回结果是Promise对象
        .then(this.getHomeInfoSucc) // 数据获取成功
    },
    getHomeInfoSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) { // res.ret为true并且有数据
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () { // 页面挂载完就执行
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
