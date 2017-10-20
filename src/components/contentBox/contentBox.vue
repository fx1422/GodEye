<template>
  <Scroll class="scroll" ref="scroll">
    <ul>
      <li @click="goContent(item.id)" v-for="(item,index) in newsList">
        <div class="title">{{item.title}}</div>
        <div class="screenShot">
          <img src="../../common/image/test1.jpg" alt=""> <img src="../../common/image/test2.jpg" alt=""> <img
          src="../../common/image/test3.jpg" alt="">
        </div>

        <div class="msg">
          <span v-if="item.to_top===0" class="label">置顶</span><span class="author">{{item.username}}</span><span
          class="n-review">{{item.n_comment}}条评论</span><span
          class="time">{{item.time}}</span><!--<i class="iconfont icon-icon4 close-news"></i>-->
        </div>
      </li>
    </ul>
  </Scroll>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import utils from 'common/js/utils'
  import {bus} from 'api/bus'
  import {baseUrl} from 'api/config'

  export default {
    data() {
      return {
        newsList: []
      }
    },
    mounted() {
      this.getNewsList();
      bus.$on('type', (data) => {
        console.log(data)
      })
    },
    methods: {
      getNewsList() {
        this.$http.get(baseUrl+'home').then(data => {
          this.newsList = data.data
          this.$refs.scroll.refresh()
        }, error => {
          console.log(error)
        })
      },
      goContent(id) {
        this.$router.push('/newsContent/'+id);
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
        .screenShot {
          display flex
          justify-content space-around
          padding 0.4rem 0
          box-sizing border-box
          img {
            height 8.4vh
            width: 30%
          }
        }
        .msg {
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
          .close-news {
            font-size 1.5rem
            z-index 99
          }
        }
      }
    }
  }

</style>
