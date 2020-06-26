<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(item, index) of imgs"
          :key="index"
        >
          <img class="gallary-img" :src="item">  <!--src需加:，因为是属性绑定-->
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data: function () {
    return {
      swiperOption: {
        // 使得滑动时，图片下侧有点，点的颜色深的话，表示轮播的是当前图片
        pagination: '.swiper-pagination', // 有一个点，表示传入swiper-pagination类名
        paginationType: 'fraction',
        /* 由于在Bnnae.vue为本组件设置了v-show，刚开始不展示后面展示时swiper计算宽度有问题，
        轮播图滚动有问题，所以加下面这两行代码，使得我这个元素或者父级元素发生dom结果变化时，会自动刷新 */
        observeParents: true,
        observer: true,
        loop: true // 循环展示图片
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit // 从父级（.wrapper）继承overflow值
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    .wrapper
      // overflow: hidden
      height: 0
      width: 100%
      padding-bottom: 68.57% // 图片宽高比
      .gallary-img
        width: 100% // 否则与右侧有间隙
      .swiper-pagination
        color: #fff
        bottom: -1rem // 此时需要去除上一级以及swiper-container的overflow:hidden，
</style>
