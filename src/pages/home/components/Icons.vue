<template>
  <div class="icons">
    <!-- 轮播图标-->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        // 使得滑动时，图片下侧有点，点的颜色深的话，表示轮播的是当前图片
        pagination: '.swiper-pagination', // 有一个点，表示传入swiper-pagination类名
        loop: true // 循环展示图片
      },
      iconList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '泡温泉'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
        desc: '两江夜游'
      }, {
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
        desc: '重庆文旅局'
      }, {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '神秘武隆'
      }, {
        id: '0008',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
        desc: '重庆欢乐谷'
      }, {
        id: '0009',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/5d502c0984b223bfeed0aac5ecdc7a99.png',
        desc: '黑山谷'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8) // page、index都从0开始编号
        if (!pages[page]) { // page不存在于pages中
          pages[page] = []
        }
        pages[page].push(item) // 设置某个page应该展示的item
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-pagination-bullets
    position: absolute
    bottom:0
  .icons >>> .swiper-container
    overflow: hidden // 可以去掉，因为.swiper-container 自带了overflow: hidden
    height: 0
    width: 100% // 可以省略该行代码，因为icons是div标签
    padding-bottom: 55%  // 高度为宽度的50%，但是为了给下方小圆点空间改为55%(.swiper-pagination-bullets)
    // background: green
  .icon // 由于设置了.icons >>> .swiper-container，这之后代码取消缩进，不过不取消缩进应该也没问题
    position: relative
    overflow: hidden
    float: left
    height: 0 // 不这样设置的话，icon会不止占了icons的一半高度
    width: 25%
    padding-bottom: 25% // 不能用height:25%因为父元素height为0。高度与宽度1:1
    // background: red
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem  // 留给图片下面的p标签的空间
      box-sizing: border-box // 参考：https://www.cnblogs.com/xinjianheyi/p/6552695.html
      padding: .1rem
      // background: blue
      .icon-img-content
        display: block
        margin: 0 auto  // 自动居中
        height:100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .44rem  // 与.icon-img的bottom对应
      height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
