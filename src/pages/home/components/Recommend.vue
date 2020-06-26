<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <!-- to前面加冒号做动态绑定 -->
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list" :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    text-indent: .2rem
    background: #eee
  .item
    margin: .1rem 0
    overflow: hidden
    display: flex
    height: 2.4rem
    // background: red
    .item-img
      width: 2.2rem
      height: 2.2rem
      padding: .1rem
    .item-info
      flex: 1
      min-width: 0 // 使得ellipsis()起作用。参考https://segmentfault.com/q/1010000016197190
      padding: .3rem .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        font-size: .28rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
        background: #ff9300
</style>
