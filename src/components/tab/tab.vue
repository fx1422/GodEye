<template>
  <div class='tab'>
    <router-link tag="div" class="tab-item" to="/home">
      <span class="tab-link"><i class="iconfont icon-home"></i>首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/video">
      <span class="tab-link"><i class="iconfont icon-shipin"></i> 视频</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="">
      <span class="tab-link" ><i class="tab-mid iconfont icon-jiahaoyou"></i></span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/ranking">
      <span class="tab-link" ><i class="iconfont icon-paihang"></i>排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/account">
      <span class="tab-link"><i class="iconfont icon-wode"></i>我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/index"
   .tab {
     position fixed
     display flex
     width: 100%
     justify-content space-around
     max-width 640px
     height $tabHeight
     background-color #F4F4F4
     opacity 0.9
     align-items center
     bottom 0
     .tab-item{
       flex 1
       height 100%
       display flex
       justify-content center
       align-items center
      .tab-link{
        display flex
        flex-direction column
        font-size  $font-size-medium
        align-items center
        i{
          font-size $font-size-large-ll
        }
        .tab-mid{
          font-size 1.5rem
          color #FF8200
        }
      }
       &.router-link-active{
         color $color-font-act
       }
     }
   }

</style>
