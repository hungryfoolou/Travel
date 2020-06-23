<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item of RecommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      RecommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201403/07/bbd58c15b85f7d1a45ab9a08ccc307d2.jpg_200x200_6c1e0e13.jpg',
        title: '湖广会馆',
        desc: '重庆市渝中区长滨路芭蕉园1号湖广会馆'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201401/29/8e60d7bb448bc8d4652efb382324076f.jpg_200x200_45d36d9b.jpg',
        title: '重庆柏联温泉',
        desc: '重庆市北碚区北温泉公园'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1805/ad/ad507355a167f587a3.img.jpg_200x200_97ec1966.jpg',
        title: '重庆长江索道',
        desc: '重庆市渝中区新华路151号'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    text-indent: .2rem
    background: #eee
  .item
    margin: .1rem 0
    overflow: hidden
    display: flex
    height: 2.4rem
    // background: red
    .item-img
      width: 2.2rem
      height: 2.2rem
      padding: .1rem
    .item-info
      flex: 1
      min-width: 0 // 使得ellipsis()起作用。参考https://segmentfault.com/q/1010000016197190
      padding: .3rem .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        font-size: .28rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
        background: #ff9300
</style>
