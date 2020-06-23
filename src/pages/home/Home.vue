<template>
  <div>
    <home-header></home-header> <!--template中用短横线写法-->
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader, // 声明局部组件
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>
</style>
