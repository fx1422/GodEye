<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>

</template>

<script>
  import Tab from 'components/tab/tab'

  export default {
    name: 'app',
    components: {
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app {
    height: 100vh;
    width: 100%;
    max-width: 640px;
    background-color white
    margin: auto;
    padding: 0;
    position: relative;
  }
</style>
