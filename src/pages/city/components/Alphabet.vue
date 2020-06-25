<template>
  <ul class="list">
    <!--用:ref="item"，每个li的ref依次为'A'、'B'...，这是为了方便后面获取某个字母的XY轴位置-->
    <li class="item" v-for="item of letters" :key="item"
    :ref="item"
    @click="handleLetterClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >
    {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () { // 页面数据更新（ajax传递数据过来）、完成页面渲染时执行
    this.startY = this.$refs['A'][0].offsetTop // 这是'A'与蓝色方框底部间的高度，不用.clientY而是offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) { // 点击后接收到事件对象e
      // Alphabet.vue传值（用emit传值）给City.vue这个父组件，然后City.vue再传给（用属性传值）List.vue
      this.$emit('change', e.target.innerText)
      // console.log(e.target.innerText)  // 点击A字母就输出A
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          // 如果已经存在了，即通过执行if方框下面的代码给timer赋值
          clearTimeout(this.timer)
        }
        /* 如果你正在做这个括号里面的事情，那么延迟16毫秒再执行这个事情,
        如果在这16毫秒之间你又做了handleTouchMove(手指滚动),则清除上次操作,转而执行这次要做的事情 */
        this.timer = setTimeout(() => {
          // const startY = this.$refs['A'][0].offsetTop // 每次滑动都执行，这样性能低，用this.startY
          // console.log(startY) // 输出74
          const touchY = e.touches[0].clientY - 79 // 79是蓝色方框的高度
          const index = Math.floor((touchY - this.startY) / 20) // 每个字母高度为20px
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8) // 间隔8毫秒
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    // ---让字母表垂直居中--
    display: flex
    flex-direction: column
    justify-content: center
    // ---让字母表垂直居中--
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    // background: red
    .item
      line-height: .4rem
      text-align: center // 水平居中
      color: $bgColor
</style>
