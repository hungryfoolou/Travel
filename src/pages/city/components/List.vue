<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{localCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key"> <!--循环对象时第二项不是index而是key-->
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for ="innerItem of item"
          :key="innerItem.id"> <!--子级的key可以等于父级的key，只要父级的key的每个key是唯一的，但我测试失败了-->
          {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    localCity: String,
    hotCities: Array,
    cities: Object
  },
  mounted () { // 加载完就执行betterscroll操作
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden // 导致列表无法拖动，用betterscroll解决该问题
    position: absolute
    top: 1.6rem
    right: 0
    bottom: 0
    left: 0
    // background: red
    .title
      line-height: .44rem
      background: #eee
      padding-left: .2rem
      padding-top: .1rem
      color: #666
      font-size: .26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem // 右侧间距为了显示列表ABCDEFG...
      overflow: hidden  // 才能使下面的float:left生效，触发bfc，参考：https://zhuanlan.zhihu.com/p/25321647
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
     .item
       line-height: .67rem
       padding-left: .2rem // 保证列表的左侧文字对齐
</style>
