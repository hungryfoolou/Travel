<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swipter-img" :src="item.imgUrl">  <!--src需加:，因为是属性绑定-->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        // 使得滑动时，图片下侧有点，点的颜色深的话，表示轮播的是当前图片
        pagination: '.swiper-pagination', // 有一个点，表示传入swiper-pagination类名
        loop: true // 循环展示图片
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201306/04/e6a374c53b689923c8d65eac.jpg_600x330_42925612.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201401/29/8e60d7bb448bc8d4652efb382324076f.jpg_600x330_6bbc3349.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透，不受scoped限制，使得wrapper下面，只要有类swiper-pagination-bullet-active，背景色都为白色
  .wrapper >>> .swiper-pagination-bullet-active
      background:#fff !important
  .wrapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:55% // 高度自动撑开，高度为宽度的55%（由图片像素600x330可知宽高比）
    background:#eee // 图片未加载出来时，显示灰色背景
    .swipter-img
      width:100%

</style>
