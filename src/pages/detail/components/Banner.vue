<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
        :src="bannerImg" alt="" />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe635;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary @close="handleGallaryClose" :imgs="bannerImgs" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
// 在build/webpack/base.conf.js中为src/common设置了别名common
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    // --防止页面抖动--
    overflow: hidden
    height: 0
    padding-bottom: 55%
    // --防止页面抖动--
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      right: 0
      bottom: 0 // 设置了bottom就可以不必设置top了
      left: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        line-height: .32rem
        height: .32rem
        margin-top: .14rem // banner-info的line-height.6rem 减去 此处的line-height .32rem 再除以2
        border-radius: .2rem
        background: rgba(0, 0 ,0 , .8) // 最后一位为不透明度，值为1的话就不透明、很明显地显示
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
