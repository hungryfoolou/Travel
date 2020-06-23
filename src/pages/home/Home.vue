<template>
  <div>
    <home-header></home-header> <!--template中用短横线写法-->
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader, // 声明局部组件
    HomeSwiper, // 等价于HomeSwiper: HomeSwiper，ES6语法，键值相同可简写
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>
</style>
