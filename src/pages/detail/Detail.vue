<template>
  <div>
    <detail-banner></detail-banner>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
export default {
  name: 'Detail',
  components: { // 注册局部组件
    DetailBanner
  }
}
</script>

<style lang="stylus" scoped>
</style>
