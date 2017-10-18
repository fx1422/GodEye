<template>
    <div class='head'>
      <span>今日头条</span><input disabled type="search" value="华为mate10 || iphone x"><i class="search iconfont icon-sousuo"></i>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/index"
  .head{
    height 10vh
    display flex
    justify-content space-between
    align-items center
    background-color #D43D3D
    box-sizing border-box
    padding 0 1rem
    position relative
    span{
      font-size 1.1rem
      color #ffffff
      font-family "楷体"
      flex 1.6
    }
    .search{
      position absolute
      left 6rem
      height 1rem
      font-size 0.8rem
      color #cacaca
      top 0
      bottom 0
      margin auto
    }
    input{
      height 40%
      flex 4
      outline none
      border none
      background-color #F4E8E7
      border-radius 4px
      color #A4A4A4
      font-size $font-size-medium-ll
      text-indent 1.5rem
      text-overflow ellipsis
    }
  }
</style>
