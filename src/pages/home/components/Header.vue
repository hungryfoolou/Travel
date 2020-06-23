<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String // 从父组件接收的city必须是String类型
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl' // 在style中引入其他样式,想用别名的话,需要在别名前加~
  .header
    display:flex // flex布局
    line-height:.86rem
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
      width:1.24rem
      float:right
      text-align:center
      .arrow-icon
        margin-left:-.04rem // 紧挨左侧文字
        font-size:0.25rem
</style>
