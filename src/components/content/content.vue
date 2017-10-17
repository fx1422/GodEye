<template>
    <div class='content'>
      sasas
    </div>
</template>

<script type="text/ecmascript-6">
  import {bus} from  'api/bus'
    export default {
      data(){
        return {

        }
      },
      created(){
        bus.$on('id',(id)=>{
          console.log(id)
        })
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
