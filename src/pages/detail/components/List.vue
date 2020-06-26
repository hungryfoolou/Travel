<template>
  <div>
    <div class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children"><!-- 如果有children说明是多级菜单 -->
        <detail-list :list="item.children"></detail-list><!-- 把children传给自己 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}

</script>
<style lang="stylus" scoped>
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    .item-title-icon
      position: relative
      left: .1rem
      top: .05rem
      display: inline-block
      width: .36rem
      height: .36rem
      margin-right: .1rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      background-size: .4rem 3rem
  .item-children
    padding: 0 .4rem
</style>
