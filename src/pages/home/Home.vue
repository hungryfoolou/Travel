<template>
  <div>
    <home-header></home-header> <!--template中用短横线写法-->
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader, // 声明局部组件
    HomeSwiper
  }
}
</script>

<style>
</style>
