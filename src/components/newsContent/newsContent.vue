<template>

  <div class='newsContent'>
    <div class="header">
      <div class="left">
        <i class="iconfont icon-back" @click="back"></i>
        <div class="span0">
          <img src="../../common/image/login.png" alt="">
          <div class="span1">
            <div>新华网</div>
            <div>3051万粉</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="focus">关注</div>
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
    <Scroll class="scroll">
      <div class="content">
        <div class="title">
          习近平：我国社会主要矛盾已经转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾
        </div>
        <div class="sub-header">
          <div class="left">
            <img src="../../common/image/login.png" alt="">
            <div class="msg">
              <div class="top">新华网</div>
              <div class="bot"><span>2017-10-10 10:12:51</span>·<span>新华网头条号</span></div>
            </div>
          </div>
          <span class="right focus ">关注</span>
        </div>
        <div class="text">
          习近平:中国特色社会主义进入新时代,我国社会主要矛盾已经转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。我国稳定解决了十几亿人的温饱问题,总体上实现小康,不久将全面建成小康社会,人民美好生活需要日益广泛,不仅对物质文化生活提出了更高要求,而且在民主、法治、公平、正义、安全、环境等方面的要求日益增长。同时,我国社会生产力水平总体上显著提高,社会生产能力在很多方面进入世界前列,更加突出的问题是发展不平衡不充分,这已经成为满足人民日益增长的美好生活需要的主要制约因素。
          习近平:中国特色社会主义进入新时代,我国社会主要矛盾已经转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。我国稳定解决了十几亿人的温饱问题,总体上实现小康,不久将全面建成小康社会,人民美好生活需要日益广泛,不仅对物质文化生活提出了更高要求,而且在民主、法治、公平、正义、安全、环境等方面的要求日益增长。同时,我国社会生产力水平总体上显著提高,社会生产能力在很多方面进入世界前列,更加突出的问题是发展不平衡不充分,这已经成为满足人民日益增长的美好生活需要的主要制约因素。
        </div>
        <div class="tag">
          <span>科技</span><span>19大</span><span>领航中国</span>
        </div>
        <div class="like">
          <div class="n-like active"><i class="iconfont icon-zan"></i>522</div>
          <div class="n-like"><i class="iconfont icon-cai"></i>20</div>
        </div>
        <div class="comment-area-list">
          <div class="list">
            <div class="left"><img src="http://p3.pstatp.com/thumb/216e00116e7a9bbb1206" alt=""></div>
            <div class="right">
              <div class="top"><span class="top-title">烟锁池瑭柳 </span><span class="zan"><i class="iconfont icon-zan"></i>22</span>
              </div>
              <div class="mid">拉平均算大概每个平方20-25元左右包含洗澡做菜用气。也就是100平方房子大概费用2000-2500左右</div>
              <div class="bot"><span class="time">10-16 19:14</span><span>3回复</span></div>
            </div>
          </div>
          <div class="list">
            <div class="left"><img src="http://p3.pstatp.com/thumb/216e00116e7a9bbb1206" alt=""></div>
            <div class="right">
              <div class="top"><span class="top-title">烟锁池瑭柳 </span><span class="zan"><i class="iconfont icon-zan"></i>22</span>
              </div>
              <div class="mid">拉平均算大概每个平方20-25元左右包含洗澡做菜用气。也就是100平方房子大概费用2000-2500左右</div>
              <div class="bot"><span class="time">10-16 19:14</span><span>3回复</span></div>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
    <div class="comment-area" v-if="!isEdit">
      <div class="input" @click="toEdit"></div>
      <i class="iconfont icon-xiaoxi"></i><i class="iconfont icon-icon-"></i>
      <i class="iconfont icon-fenxiang1"></i>
      <div class="tips" @click="toEdit"><i class="iconfont icon-xie"></i><span>写评论...</span></div>
    </div>
    <div class="comment-area-edit" v-if="isEdit">
      <input placeholder="优质评论将会被优先展示" type="text" v-focus="isEdit" v-model="inputVal">
      <div class="publish" :class="notNull==true?'notnull':''">发布</div>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    data() {
      return {
        isEdit:false,
        notNull:false,
        inputVal:null
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      toEdit(){
        this.isEdit=true
      },
    },
    watch:{
      inputVal(val){
       if(val.length>0){
         this.notNull=true
       }else {
         this.notNull=false
       }
      }
    },
    directives: {
      focus: {
        inserted: function (el, {value}) {
          if (value) {
            el.focus();
          }
        }
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/index"
  .newsContent {
    height 100%
    width: 100%
    position absolute
    max-width 640px
    top: 0
    margin auto
    left 0
    right 0
    background-color white
    z-index 100
    .header {
      height 7vh
      border-bottom 1px solid #f0f0f0
      display flex
      justify-content space-between
      align-items center
      box-sizing content-box
      padding 0 0.5rem
      .left {
        display flex
        align-items center
        flex 6
        i {
          font-size 1.36rem
          color #202020
        }
        .span0 {
          display flex
          align-items center
          margin-left 0.6rem
          img {
            height 2rem
            border-radius 12px
          }
          .span1 {
            display flex
            flex-direction column
            font-size $font-size-medium-x
            font-family "微软雅黑"
            margin-left 0.3rem
            width 8rem
            div:nth-child(1) {
              font-weight 600
              overflow hidden
              text-overflow ellipsis
            }
            div:nth-child(2) {
              overflow hidden
              font-size $font-size-small
              color #6e6e6e
            }
          }
        }

      }
      .right {
        display flex
        flex 2
        .focus {
          font-size $font-size-small
          color #ffff
          box-sizing content-box
          padding 0.14rem 0.6rem
          background-color #F85959
          border-radius 4px
          margin-right 0.8rem
        }

      }
    }
    .scroll {
      height 87vh
      overflow hidden
      .content {
        box-sizing content-box
        padding 0 0.6rem
        .title {
          box-sizing content-box
          padding 0.4rem 0
          font-size 0.84rem
          line-height 1.5rem
          font-weight 600
          font-family "微软雅黑"
        }
        .sub-header {
          display flex
          height 7vh
          justify-content space-between
          align-items center
          .left {
            display flex
            align-items center
            img {
              height 2rem
            }
            .msg {
              display flex
              flex-direction column
              align-items flex-start
              font-size $font-size-medium-x
              margin-left 0.4rem
              width 12rem
              .top {
                font-weight 600
              }
              .bot {
                font-size $font-size-small
                color #B8B8B8
                overflow hidden
              }
            }
          }
          .right {
            display flex
            align-items center
            font-size $font-size-small
            color #ffff
            box-sizing border-box
            height 50%
            padding 0.14rem 0.56rem
            background-color #F85959
            border-radius 4px
          }
        }
        .text {
          box-sizing border-box
          padding 0.8rem 0.4rem 0
          font-size $font-size-large-s
          line-height 1.5rem
        }
        .tag {
          display flex
          justify-content flex-start
          box-sizing border-box
          padding 1rem 0.5rem
          font-size $font-size-medium-x
          span {
            box-sizing border-box
            padding 0.2rem 0.8rem
            background-color #F4F5F6
            margin-right 0.5rem
            border-radius 4px
            letter-spacing 1px
          }
        }
        .like {
          display flex
          justify-content space-around
          padding 1rem 0
          box-sizing border-box
          .n-like {
            box-sizing border-box
            padding 0.34rem 1.6rem
            border 1px solid #EEEEEE
            border-radius 20px
            display flex
            align-items center
            font-size $font-size-medium-l
            i {
              font-size $font-size-medium
              color #000000
              margin-right 0.6rem
            }
            &.active {
              background-color #e9e9e9
              color #a9a9a9
              i {
                color #a9a9a9
              }
            }

          }
        }
        .comment-area-list {
          margin-top 1rem
          .list {
            display flex
            margin-top 0.8rem
            .left {
              flex 1
              img {
                height 1.8rem
                border-radius 50%
              }
            }
            .right {
              flex 6
              .top {
                display flex
                justify-content space-between
                align-items center
                .top-title {
                  font-size $font-size-medium
                  font-weight 500
                  letter-spacing 2px
                  color #2C558E
                }
                .zan {
                  font-size 0.64rem
                  color #AEB4BE
                  i {
                    font-size 0.8rem
                    margin-right 0.2rem
                  }

                }

              }
              .mid {
                margin-top 0.4rem
                font-size $font-size-medium-l
                font-weight normal
                line-height 1.2rem
                letter-spacing 1px
                font-family "微软雅黑"
              }
              .bot {
                font-size $font-size-medium-x
                box-sizing border-box
                padding 0.1rem 0
                span:nth-child(1){
                  color #747474
                }
                span:nth-child(2) {
                  margin-left 0.5rem
                  box-sizing border-box
                  padding 0.2rem 0.6rem
                  background-color #F4F5F6
                  border-radius 12px
                }
              }
            }

          }

        }
      }
    }
    .comment-area {
      position fixed
      max-width 640px
      bottom 0
      width: 100%
      height 6vh
      box-sizing border-box
      padding 0 0.5rem
      display flex
      align-items center
      border-top 1px solid #f0f0f0
      justify-content space-between
      z-index 99
      .input {
        outline none
        height 70%
        border-radius 14px
        background-color #d2d3d4
        flex 5
      }
      i {
        flex 1
        font-size 1.2rem
        margin-left 0.6rem
      }
      .tips {
        position absolute
        font-size $font-size-small
        display flex
        align-items center
        color #000000
        left 0.5rem
        top 0
        bottom 0
        margin auto
        i {
          font-size 0.8rem
          margin-right 0.4rem
        }
      }
    }
    .comment-area-edit{
      position fixed
      bottom 0
      width: 100%
      height 6vh
      box-sizing border-box
      padding 0 0.5rem
      max-width 640px
      display flex
      align-items center
      border-top 1px solid #f0f0f0
      justify-content space-between
      z-index 99
      input{
        width 80%
        height 70%
        border-radius 14px
        background-color #e0e1e2
        outline none
        font-size $font-size-medium
        text-indent 1rem
        letter-spacing 2px
      }
      .publish{
        width 20%
        color #cacaca
        font-weight 600
        font-size $font-size-medium-l
        text-align center
      }
      .notnull{
        color #467CD4
      }
    }
  }
</style>
