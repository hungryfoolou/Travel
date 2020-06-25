<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div><!-- 用vuex获取公共数据 -->
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!--ref="key"使得每个area的ref分别为'A'、'B'、'C'...，由于数据是变化的，所以ref前面加冒号(与其他ref不同)
      ,使用this.scroll.scrollToElement()跳转到某个ref相应的dom元素即可-->
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key"><!--循环对象时第二项不是index而是key-->
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
            @click="handleCityClick(innerItem.name)"
            v-for ="innerItem of item"
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
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city' // 把store中的公共数据city映射为这里的计算属性currentCity
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCityMutation(city)
      // this.$store.commit('changeCityMutation', city)
      // this.$store.dispatch('changeCityAction', city) // 通过dispatch()触发名为changeCityAction的Action
      // alert(city)
      // 页面跳转
      this.$router.push('/')
    },
    // 把名为changeCityMutation的mutation映射为这里的一个function：changeCityMutation
    ...mapMutations(['changeCityMutation'])
  },
  watch: {
    letter: function () {
      if (this.letter) { // 如果不为空，说明用户点击了右侧某个字母
        /* 因为上面写了代码ref="key"，跳转到某ref对应的dom即可
        由于上面是在循环(v-for)输出的ref，通过this.$refs[this.letter]获取的是一个数组，
        需转化为dom元素/dom选择器，后面加[0]就可以获取对应dom元素 */
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element) // 调用betterscroll方法
      }
    }
  },
  mounted () { // 加载完就执行betterscroll操作
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
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
