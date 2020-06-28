<template>
  <div>
    <home-header></home-header> <!--template中用短横线写法-->
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
import { mapState } from 'vuex'

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
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city']) // 把store中的公共数据city映射为这里的计算属性city
  },
  methods: {
    getHomeInfo () {
      // 请求/static/mock/中模拟的ajax数据（配置config/index.js实现了/api/路径数据的转发）
      // 原代码为.get('/api/index.json?city=' + this.city)，放到服务器则改为'/travel/static/mock/index.json?city=' + this.city
      axios.get('/travel/static/mock/index.json?city=' + this.city) // 返回结果是Promise对象
        .then(this.getHomeInfoSucc) // 数据获取成功
    },
    getHomeInfoSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) { // res.ret为true并且有数据
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () { // 页面挂载完就执行 // 用created()函数也可以，但最好用mounted()
    this.lastCity = this.city // this.city 是计算属性
    this.getHomeInfo()
  },
  activated () {
    if (this.city !== this.lastCity) {
      this.lastCity = this.city
      this.getHomeInfo() // 判断这次显示的城市是否与上次显示的城市相同，不同则发生ajax请求
    }
  }
}
</script>

<style>
</style>
