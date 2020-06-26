<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back-icon">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back-icon">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log('scroll')
      // 元素的实际上边缘到显示的上边缘之间的像素数
      const top = document.documentElement.scrollTop
      /* 下滑距离超过60px时，把之前的返回按钮去掉，取而代之，在顶部固定住“景点详情”，
      即使往下拖拽，“景点详情”的位置依然不变 */
      if (top > 60 && top < 140) {
        this.showAbs = false
        const currentOpacity = top / 140
        this.opacityStyle = {
          opacity: currentOpacity
        }
      } else if (top > 140) {
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () { // 由于用了keep-alive，只要页面展示，就会执行生命周期函数activated
    window.addEventListener('scroll', this.handleScroll) // 滑动时执行handleScroll
  },
  deactivated () {
    // 对window全局对象解绑，不然组件可能会执行handleScroll
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header-abs
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0, 0, 0, .8)
    .header-abs-back-icon
      color: #fff
      font-size: .4rem
  .header-fixed
    position: fixed
    top: 0
    right: 0
    left: 0
    // overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back-icon
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
