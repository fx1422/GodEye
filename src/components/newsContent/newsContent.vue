<template>

  <div class='newsContent'>
    <div class="header" ref="header">
      <div class="left">
        <i class="iconfont icon-back" @click="back"></i>
        <div class="span0" v-if="!showTitle">
          <img src="../../common/image/login.png" alt="">
          <div class="span1">
            <div>{{newsContent.username}}</div>
            <div>{{newsContent.n_fans}}个粉丝</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="focus" v-if="!showTitle">关注</div>
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
    <Scroll ref="scroll" class="scroll" :listenScroll="scrolls" @scroll="listenScroll">
      <div class="content">
        <div class="title" ref="title">
          {{newsContent.title}}
        </div>
        <div class="sub-header" ref="subHeader">
          <div class="left">
            <img src="../../common/image/login.png" alt="">
            <div class="msg">
              <div class="top">{{newsContent.username}}</div>
              <div class="bot"><span>{{newsContent.time}}</span>·<span>{{newsContent.username}}</span></div>
            </div>
          </div>
          <span class="right focus ">关注</span>
        </div>
        <div class="text">
          {{newsContent.content}}
        </div>
        <div class="tag">
          <span v-for="list in tagList">{{list}}</span>
        </div>
        <div class="like">
          <div class="n-like active"><i class="iconfont icon-zan"></i>{{newsContent.n_like}}</div>
          <div class="n-like"><i class="iconfont icon-cai"></i>{{newsContent.n_unlike}}</div>
        </div>
        <div class="comment-area-list">
          <div class="list" v-for="list in comment">
            <div class="left"><img src="http://p3.pstatp.com/thumb/216e00116e7a9bbb1206" alt=""></div>
            <div class="right">
              <div class="top"><span class="top-title">{{list.username}} </span><span class="zan"><i
                class="iconfont icon-zan"></i>{{list.n_like_comment}}</span>
              </div>
              <div class="mid">{{list.content}}</div>
              <div class="bot"><span class="time">{{list.comment_time}}</span><!--<span>3回复</span>--></div>
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
      <div class="publish" :class="notNull==true?'notnull':''" @click="post_comment">发布</div>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Qs from 'qs'
  import Utils from 'common/js/utils'
  import {bus} from 'api/bus'

  export default {
    data() {
      return {
        showTitle: true,
        scrolls: true,
        news_id: '',
        newsContent: [],
        comment: [],
        tagList: [],
        isEdit: false,
        notNull: false,
        inputVal: null,
        height: 0
      }
    },
    created() {
      this._initList();
    },
    mounted() {
      this.height = this.$refs.subHeader.offsetHeight + this.$refs.title.offsetHeight * 6;
    },
    methods: {
      _initList() {
        this.news_id = this.$route.params.id;
        this.getNewsContent();
        this.getComment();
      },
      listenScroll(pos) {
        this.showTitle = -pos.y < this.height || -pos.y < 100;
      },
      getNewsContent() {
        this.$http.get(baseUrl + 'home/newsContent', {params: {'id': this.news_id}}).then(data => {
          this.newsContent = data.data[0];
          this.tagList = this.newsContent.tag.split(',');
          this.$nextTick(() => {
            this.$refs.scroll.refresh();
          });

        }, error => {
          console.log(error)
        });
      },
      getComment() {
        this.$http.get(baseUrl + 'home/comment', {params: {'id': this.news_id}}).then(data => {
          this.comment = data.data;
          this.$nextTick(() => {
            this.$refs.scroll.refresh();
          });
        }, error => {
          console.log(error)
        });
      },
      back() {
        this.$router.go(-1)
      },
      toEdit() {
        this.isEdit = true
      },
      post_comment() {
        const commentator = Utils.getCookie('au_mobile');
        const content = this.inputVal;
        const news_id = this.news_id;
        if (commentator) {
          this.$http.post(baseUrl + 'post_comment', Qs.stringify({news_id,content,commentator})).then(data => {
           if(data.data.code===0){
             this.getComment();
             this.$nextTick(() => {
               this.$refs.scroll.refresh();
             });
             this.isEdit = false
           }
          }, error => {
            console.log(error)
          })
        } else {
          bus.$emit('send_login_mobile', true)
        }

      }
    },
    watch: {
      inputVal(val) {
        if (val.length > 0) {
          this.notNull = true
        } else {
          this.notNull = false
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
        justify-content flex-end
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
                span:nth-child(1) {
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
    .comment-area-edit {
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
      input {
        width 80%
        height 70%
        border-radius 14px
        background-color #e0e1e2
        outline none
        font-size $font-size-medium
        text-indent 1rem
        letter-spacing 2px
      }
      .publish {
        width 20%
        color #cacaca
        font-weight 600
        font-size $font-size-medium-l
        text-align center
      }
      .notnull {
        color #467CD4
      }
    }
  }
</style>
