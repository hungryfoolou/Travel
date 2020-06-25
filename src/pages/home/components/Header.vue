<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- 用vuex获取公共数据 -->
        {{this.city}} <!--{{this.doubleCity}}-->
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']), // 把store中的公共数据city映射为这里的计算属性city
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl' // 在style中引入其他样式,想用别名的话,需要在别名前加~
  .header
    display:flex // flex布局
    line-height: $headerHeight
    color:#fff
    background:$bgColor
    .header-left
      width:.64rem
      float:left
      .back-icon
        text-align:center
        font-size:0.4rem
    .header-input
      flex:1 // 自动撑开
      padding-left:.2rem
      margin-top:.12rem
      margin-left:.2rem
      height:.64rem // line-height .86rem 减去margin-top .12rem，再减去.12rem（也要给底部剩.12rem）
      line-height:.64rem // 使得文字居中
      background:#fff
      border-radius:.1rem
      color:#ccc
    .header-right
      min-width:1.04rem
      padding: 0 .1rem
      float:right
      text-align:center
      color: #fff
      .arrow-icon
        margin-left:-.04rem // 紧挨左侧文字
        font-size:0.25rem
</style>
