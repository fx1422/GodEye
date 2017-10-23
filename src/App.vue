<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
   <transition name="slide">
     <Login v-if="ShowLogin"></Login>
   </transition>
  </div>

</template>

<script>
  import Tab from 'components/tab/tab'
  import Login from 'components/login/login'
  import {bus} from 'api/bus'

  export default {
    name: 'app',
    data() {
      return {
        ShowLogin: false
      }
    },
    created() {
      bus.$on('send_login_mobile', (data) => {
        this.ShowLogin = data
      });
      bus.$on('closeLogin', (data) => {
        this.ShowLogin = data
      })
    },
    components: {
      Tab, Login
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
  .slide-enter-active, .slide-leave-active
    transition: all 0.5s

  .slide-enter, .slide-leave-to
    transform: translate3d(0%, 100%, 0)
</style>
