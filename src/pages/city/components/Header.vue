<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    position: relative // 相对于其正常位置进行定位
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back-icon
      // 相对于static定位以外的第一个父元素进行定位，参考：https://www.runoob.com/cssref/pr-class-position.html
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
