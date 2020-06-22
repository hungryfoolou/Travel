<template>
  <div>
    <home-header></home-header> <!--template中用短横线写法-->
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader // 声明局部组件
  }
}
</script>

<style>
</style>
