<template>
  <div class='home'>
    <TopHead></TopHead>
    <TopMenuBar></TopMenuBar>
    <Content></Content>
  </div>
</template>

<script type="text/ecmascript-6">
  import TopHead from 'components/head/head'
  import TopMenuBar from 'components/topMenuBar/topMenuBar'
  import Content from 'components/content/content'

  export default {
    data() {
      return {}
    },
    components: {
      TopHead,TopMenuBar,Content
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
