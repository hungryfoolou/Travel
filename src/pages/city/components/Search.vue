<template>
  <div>
    <div class="search">
      <!-- v-model：双向绑定 -->
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <!-- keyword为空时就不隐藏 -->
    <div class="search-content" ref="searchref" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
          v-for="item of list" :key="item.id"
          @click="handleCityClick(item.name)"
          >
          {{item.name}}
        </li>
        <!-- 如果搜索结果为空，则显示"没有找到匹配数据"-->
        <li class="search-item border-bottom" v-show="hasEmptyResult">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '', // 关键字
      list: [], // 存放关键字搜索结果
      timer: null
    }
  },
  computed: {
    hasEmptyResult () {
      return !this.list.length
    }
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
    keyword () {
      // 用节流函数提高效率
      if (this.timer) {
        // 如果已经存在了，即通过执行if方框下面的代码给timer赋值
        clearTimeout(this.timer)
      }
      if (!this.keyword) { // 比如用户搜索结束后又清空了搜索框，那么搜索结果列表也应该清空
        this.list = []
        return // 不必执行下面代码
      }
      /* 如果你正在做这个括号里面的事情，那么延迟16毫秒再执行这个事情,
      如果在这16毫秒之间你又做了本次函数操作,则清除上次操作,转而执行这次要做的事情 */
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) { // 遍历每个字母
          this.cities[i].forEach((value) => { // 遍历每个字母下的所有城市键值对
            // 搜索到了关键词
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result // 把搜索结果放到this.list中
      }, 100) // 间隔100毫秒
    }
  },
  mounted () { // 加载完就执行betterscroll操作
    this.scroll = new BScroll(this.$refs.searchref, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    padding: 0 .2rem
    height: .72rem
    background: $bgColor
    .search-input
      padding: 0 .3rem
      box-sizing: border-box // borders和padding全都包含在定义的宽高里面
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666 // 输入字体的颜色
  .search-content
    z-index: 1 // 参考：https://www.w3school.com.cn/cssref/pr_pos_z-index.asp
    overflow: hidden
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    left: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
</style>
