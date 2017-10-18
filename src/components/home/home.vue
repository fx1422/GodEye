<template>
  <div class='home'>
    <TopHead></TopHead>
    <TopMenuBar></TopMenuBar>
    <ContentBox></ContentBox>
  </div>
</template>

<script type="text/ecmascript-6">
  import TopHead from 'components/head/head'
  import TopMenuBar from 'components/topMenuBar/topMenuBar'
  import ContentBox from 'components/ContentBox/ContentBox'

  export default {
    data() {
      return {}
    },
    components: {
      TopHead,TopMenuBar,ContentBox
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/index"
  .home {
    height $contentHeight
    width: 100%
  }
</style>
