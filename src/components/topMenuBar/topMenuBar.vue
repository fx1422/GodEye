<template>
  <div class='top_menu_bar'>
    <div class="link-item">
      <div v-for="(item,index) in dataList"
           @click="showList(item,index)"
           class="tab-item"
           :class="index===num?'router-link-active':''">
        <span class="tab-link">{{item.title}}</span>
      </div>
    </div>
    <i class="add-more iconfont icon-more"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {bus} from  'api/bus'
  export default {
    data() {
      return {
        num: 0,
        dataList: [{'title': '推荐', path: '001'}, {'title': '热门', path: '002'}, {'title': '视频', path: '003'},
          {'title': '图片', path: '004'}, {'title': '社会', path: '005'},
          {'title': '娱乐', path: '006'}, {'title': '足球', path: '007'}, {'title': '社会', path: '008'}]
      }
    },
    methods: {
      showList(item,index) {
        this.num = index;
        bus.$emit('type',item.title);
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/index"
  .top_menu_bar {
    display flex
    height 5vh
    background-color #F4F5F6
    border-bottom 1px solid #F4E8E6
    font-size $font-size-medium-l
    box-sizing border-box
    padding 0 0.6rem
    .link-item {
      overflow: hidden;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
      .tab-item {
        display inline-block
        width: 2.8rem
        height 100%
        text-align center
        line-height 5vh
      }
      .router-link-active {
        color #F85959
        font-size 0.8rem
      }
    }
    .link-item::-webkit-scrollbar {
      display: none;
    }
    .add-more {
      width 10vw
      display flex
      justify-content center
      align-items center
      font-size 0.8rem
      color #545454
    }
  }
</style>
