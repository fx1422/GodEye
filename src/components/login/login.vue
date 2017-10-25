<template>
  <div class='login'>
    <div class="item-1"><i class="iconfont icon-guanbi" @click="close"></i></div>
    <div class="item-2">登录你的头条精彩永不关闭</div>
    <div class="item-3">
      <input type="tel" placeholder="手机号" v-model.trim="mobile_numb">
      <div class="mobile_code" @click="flag_click&&get_mobile_code()">{{btn_mobile_code}}</div>
    </div>
    <div class="item-4"><input type="tel" placeholder="请输入验证码" v-model.trim="note_code"></div>
    <div class="item-5">未注册手机验证后自动登录</div>
    <div class="item-6" @click="login">进入头条</div>
    <div class="item-7">
      <input type="radio" checked> <span>我已阅读并同意"用户协议和隐私条款"</span>
    </div>
    <div class="item-9">账号密码登录</div>
    <div class="item-8">
      <div class="list">
        <i class="iconfont icon-weixin"></i>
      </div>
      <div class="list">
        <i class="iconfont icon-QQ"></i>
      </div>
      <div class="list">
        <i class="iconfont icon-24"></i>
      </div>
    </div>
    <transition name="tips" v-on:afterEnter="afterEnter">
      <div class="tips" v-if="tips.showTips">{{tips.tipsMsg}}</div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import {bus} from 'api/bus'
  import Utils from 'common/js/utils'
  import Qs from 'qs';

  export default {
    data() {
      return {
        btn_mobile_code: '发送验证码',
        flag_click: true,
        cutInV: '',
        mobile_numb: null,
        note_code: null,
        tips: {showTips: false, tipsMsg: ''},
      }
    },
    methods: {
      get_mobile_code() {
        if(this.mobile_numb===null){
          this.tips.showTips = true;
          this.tips.tipsMsg = "请输入手机号";
          return false
        }
        this.btn_mobile_code = 29;
        this.flag_click = false;
        this.cutInV = setInterval(() => {
          this.time_cut_down()
        }, 1000);
        this.$http.post(baseUrl + 'login/get_note_code', Qs.stringify({'username': this.mobile_numb})).then(data => {
          console.log(data)
        }, error => {
          console.log(error)
        })
      },

      time_cut_down() {
        this.btn_mobile_code--;
      },
      close() {
        bus.$emit('closeLogin', false)
      },
      afterEnter(el) {
        setTimeout(() => {
          this.tips.showTips = false
        }, 1000)
      },
      login() {
        if (this.mobile_numb !== null && this.note_code !== null) {
          if (Utils.checkedMobile(this.mobile_numb)) {
            this.$http.post(baseUrl + 'login', Qs.stringify({
              'username': this.mobile_numb,
              'note_code': this.note_code
            })).then(data => {
              if (data.data.code === 0) {
                this.tips.showTips = true;
                this.tips.tipsMsg = "登录成功，跳转首页";
                Utils.setCookie('login_success', true);
                Utils.setCookie('au_mobile', this.mobile_numb);
                this.close();
                this.$router.push('/home');
              } else if (data.data.code === 1) {
                this.tips.showTips = true;
                this.tips.tipsMsg = "验证码错误"
              }
            }, error => {
              console.log(error)
            })

          } else {
            this.tips.showTips = true;
            this.tips.tipsMsg = '手机号不正确'
          }
        } else {
          this.tips.showTips = true;
          this.tips.tipsMsg = '手机号或验证码不能为空'
        }
      }
    },
    watch: {
      btn_mobile_code(newV, oldV) {
        if (newV <= 1) {
          clearInterval(this.cutInV);
          this.flag_click = true;
          this.btn_mobile_code = '发送验证码'
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/index"
  .login {
    top 0
    height 100vh
    width 100vw
    position fixed
    z-index 500
    background-color #ffffff
    max-width 640px
    margin auto
    box-sizing border-box
    padding 0 0.6rem
    .item-1 {
      height 2rem
      display flex
      justify-content flex-end
      align-items center
      font-size 1.1rem
      color #828282
    }
    .item-2 {
      height 3.33rem
      display flex
      justify-content center
      align-items center
      font-size $font-size-large-l
      letter-spacing 1px
    }
    .item-3, .item-4 {
      width: 100%
      height 2rem
      display flex
      justify-content space-between
      align-items center
      position relative
      margin-top 1rem
      input {
        width: 100%
        outline none
        border 1px solid #E2E2E2
        border-radius 19px
        height 90%
        font-size $font-size-medium
        text-indent 1rem
        color #e2e2e2
        padding-right 5rem
      }
      input[placeholder], [placeholder], *[placeholder] {
        color: black !important;
      }
      input:focus {
        border 1px solid #9497ff
      }
      .mobile_code {
        width: 4rem
        position absolute
        line-height 1rem
        top 0
        bottom 0
        margin auto
        height 1rem
        right 0
        font-size $font-size-medium-x
        text-align center
        color black
        border-left 1px solid #e2e2e2
        cursor pointer
      }
    }

    .item-5 {
      text-align center
      font-size $font-size-medium-x
      height 1.2rem
      line-height 1.2rem
      color #CCCCCC
    }
    .item-6 {
      width: 100%
      height 2rem
      display flex
      justify-content center
      align-items center
      position relative
      border-radius 19px
      background-color #FAA9A9
      color #ffffff
      font-size $font-size-large-s
    }
    .item-7 {
      display flex
      justify-content center
      font-size $font-size-medium-x
      align-items center
      height 2rem
      span {
        margin-left 0.4rem
      }
    }
    .item-8 {
      position absolute
      bottom 0
      display flex
      justify-content center
      width: 100%
      height 3.33rem
      align-items center
      margin auto
      left 0
      right 0
      max-width 640px
      .list {
        height 2rem
        display flex
        align-items center
        width 2rem
        border-radius 50%
        border 1px solid #35C020
        justify-content center
        margin-left 0.8rem
        i {
          font-size 1.2rem
        }
      }
      .list:nth-child(1) {
        border 1px solid #36C021
        color #36C021
      }
      .list:nth-child(2) {
        border 1px solid #E17473
        color #E17473
      }
      .list:nth-child(3) {
        border 1px solid #FED23A
        color #FED23A
      }
    }
    .tips {
      position fixed
      top 4.6rem
      left 0
      height 1.4rem
      padding 0 1rem
      background-color #939ae4
      border-left none
      border-bottom-right-radius 15px
      border-top-right-radius 15px
      text-align center
      font-size $font-size-medium-x
      line-height 1.4rem
      color #d9dce1
    }
    .item-9{
      color #238DDC
      text-align center
      font-size $font-size-medium
      height 1rem
      line-height 1rem
    }
  }

  .tips-enter-active, .tips-leave-active {
    transition: all .4s;
  }

  .tips-enter, .tips-leave-active {
    transform: translate3d(-3rem, 0, 0);
    opacity: 0;
  }
</style>
