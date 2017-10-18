<template>
  <Scroll class="scroll">
    <ul>
      <li @click="goContent()">
        <div class="title">刀郎曾被那英瞧不起，说刀郎是农民歌手，来看一下他在新疆的生活</div>
        <div class="msg">
          <span class="label">置顶</span><span class="author">新华网</span><span class="n-review">52条评论</span><span
          class="time">52分钟前</span><!--<i class="iconfont icon-icon4 close-news"></i>-->
        </div>
      </li>
    </ul>
  </Scroll>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import {bus} from 'api/bus'

  export default {
    data() {
      return {}
    },
    created() {
      bus.$on('type', (data) => {
        console.log(data)
      })
    },
    methods: {
      goContent() {
        this.$router.push('/newsContent')
        return
      },
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/index"
  .scroll {
    width: 100%
    height 78vh
    overflow hidden
    ul {
      li {
        box-sizing border-box
        padding 0.8rem
        .title {
          font-size 0.86rem
          font-family 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif
          letter-spacing 2px
        }
        .msg {
          margin-top 0.2rem
          position relative
          .label {
            font-size $font-size-small-s
            border 1px solid #FCADAD
            color #F85959
            box-sizing border-box
            padding 0.05rem 0.2rem
            border-radius 4px
          }
          .author, .n-review, .time {
            font-size $font-size-medium-x
            margin-left 0.5rem
            color #a6a6a6
          }
          i {
            position absolute
            right 0
            bottom -0.5rem
            color #C4C4C4
          }
          .close-news{
            font-size 1.5rem
            z-index 99
          }
        }
      }
    }
  }

</style>
