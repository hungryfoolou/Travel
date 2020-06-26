<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    >
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'

export default {
  name: 'Detail',
  components: { // 注册局部组件
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      // 请求/static/mock/中模拟的ajax数据（配置config/index.js实现了/api/路径数据的转发）
      axios.get('/api/detail.json?id=', { // 参数来自router/index.js
        params: {
          id: this.$route.params.id
        } // 代码等价于 axios.get('/api/detail.json?id=' + this.$route.params.id)
      }).then(this.getDetailInfoSucc) // 数据获取成功
    },
    getDetailInfoSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) { // res.ret为true并且有数据
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () { // 页面挂载完就执行
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
    // background: red
</style>
