<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :hotCities="hotCities" :cities="cities"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [], // 类型与json文件类型一致，比如hotCities为数组
      cities: {}, // 所有城市
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      // 请求/static/mock/中模拟的ajax数据
      // 原代码'/api/city.json'，放到服务器则改为'/travel/static/mock/city.json'
      axios.get('/api/city.json') // 返回结果是Promise对象
        .then(this.getCityInfoSucc) // 数据获取成功
    },
    getCityInfoSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) { // res.ret为true并且有数据
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
      // console.log(letter)
    }
  },
  mounted () { // 页面挂载完就执行
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
