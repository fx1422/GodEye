<template>
  <Scroll class="scroll">
    <div class='account'>
      <div class="head" v-if="!isLogin">
        <div class="top">
          登录推荐更精准
        </div>
        <div class="bot">
          <div class="item" @click="login_mobile"><i class="iconfont icon-shouji"></i></div>
          <div class="item"><i class="iconfont icon-weixin"></i></div>
          <div class="item"><i class="iconfont icon-QQ"></i></div>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
      <div class="sub-head" v-if="isLogin">
        <div class="top"><img src="../../common/image/touxiang.jpg" alt=""><span>乙+Q</span></div>
        <div class="bot">
          <div class="item">
            <span>2</span><span>动态</span>
          </div>
          <div class="item">
            <span>2</span><span>关注</span>
          </div>
          <div class="item">
            <span>2</span><span>粉丝</span>
          </div>
        </div>
      </div>
      <div class="tab">
        <div class="item">
          <i class="iconfont icon-icon-"></i><span>收藏</span>
        </div>
        <div class="item">
          <i class="iconfont icon-lishi"></i><span>历史</span>
        </div>
        <div class="item" @click="cutNight">
          <span v-if="mid_night">
            <i class="iconfont icon-yejian"></i><span>夜间</span>
          </span>
          <span v-if="!mid_night">
           <i class="iconfont icon-rijian"></i><span>日间</span>
          </span>

        </div>
      </div>
      <div class="list">
        <span>消息通知</span><i class="iconfont icon-youjiantou"></i>
      </div>
      <div class="list">
        <span>用户反馈</span><i class="iconfont icon-youjiantou"></i>
      </div>
      <div class="list">
        <span>系统设置</span><i class="iconfont icon-youjiantou"></i>
      </div>
      <div class="login_out" @click="login_out">
       退出登录
      </div>
    </div>
  </Scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import {bus} from 'api/bus'
  import Utils from 'common/js/utils'

  export default {
    data() {
      return {
        isLogin: false,
        mid_night: false
      }
    },
    created() {
      if (Utils.getCookie('login_success')) {
        this.isLogin = Utils.getCookie('login_success');
      }
    },
    methods: {
      login_mobile() {
        bus.$emit('send_login_mobile', true)
      },
      cutNight() {
        this.mid_night = !this.mid_night
      },
      login_out(){
        Utils.delCookie('login_success');
        this.isLogin = false
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/index"
  .scroll {
    height 93vh
    width 100%
    overflow hidden
    background-color #F4F5F6
    .account {
      .head {
        height 25vh
        background-color #3A3A3A
        .top {
          display flex
          justify-content center
          height 5vh
          align-items center
          color #E1E1E1
          font-size $font-size-medium-ll
          letter-spacing 2px
        }
        .bot {
          display flex
          justify-content center
          position relative
          align-items center
          .item {
            width 3rem
            height 3rem
            border-radius 50%
            background-color #ffffff
            margin 5vh 0.6rem
            display flex
            justify-content center
            align-items center
            font-size 1.6rem
          }
          .item:nth-child(1) {
            color #F85B5B
          }
          .item:nth-child(2) {
            color #35C020
          }
          .item:nth-child(3) {
            color #ECBB51
          }
          i.icon-youjiantou {
            position absolute
            color #A6A6A6
            font-size 1rem
            right 1rem
          }
        }
      }
      .sub-head {
        background-color #3A3A3A
        height 25vh
        .top {
          display flex
          justify-content flex-start
          align-items center
          margin-left 1rem
          height 15vh
          box-sizing border-box
          padding-top 2rem
          img {
            height 3rem
            border 1px solid #ffffff
            border-radius 50%
          }
          span {
            color #ffffff
            margin-left 0.8rem
            font-size $font-size-large
          }
        }
        .bot {
          display flex
          justify-content center
          align-items center
          height 10vh
          .item {
            display flex
            flex-direction column
            width 33%
            align-items center
            font-size $font-size-medium
            border-right 1px solid #414141
            box-sizing border-box
            padding-top 0.6rem
            span:nth-child(1) {
              color #ffffff
              line-height 1rem
            }
            span:nth-child(2) {
              color #5D5D5D
              line-height 1rem
              font-size $font-size-small
            }
          }
          .item:last-child {
            border-right none
          }
        }
      }
      .tab {
        height 11vh
        display flex
        justify-content center
        align-items center
        background-color #ffffff
        .item {
          height 100%
          width 33.33%
          display flex
          justify-content center
          align-items center
          flex-direction column
          cursor pointer
          i {
            font-size 1.1rem
          }
          span {
            font-size $font-size-medium-x
            margin-top 0.2rem
          }
        }
        .item:nth-child(1) {
          i {
            color #F7A13C
          }
        }
        .item:nth-child(2) {
          i {
            color #F5507F
          }
        }
        .item:nth-child(3) {
          span {
            display flex
            flex-direction column
            i {
              color #5B85FF
            }
          }

        }

      }
      .list {
        height 6vh
        background-color #ffffff
        margin-top 0.6rem
        display flex
        align-items center
        justify-content space-between
        box-sizing border-box
        padding 0 1rem
        span {
          font-size $font-size-large-s
          letter-spacing 2px
        }
        i {
          font-size 0.9rem
          color #E4E4E4
        }
      }
      .login_out{
        text-align center
        font-size $font-size-large
        height 5vh
        line-height 5vh
        background-color #4a89ff
        width 80%
        margin 1rem auto 0
        border-radius 6px
        color #ffffff
      }
      .login_out:active{
        background-color #2c558e
      }
    }

  }


</style>
