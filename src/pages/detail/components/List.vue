<template>
  <div>
    <div 
    class="item border-bottom"
    v-for='(item,index) of categoryList'
    :key='index'
    >
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 递归组件实现分级列表 -->
      <div v-if='item.children'>
        <detail-list :categoryList='item.children'></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props:{
    categoryList:Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.item
  line-height:.8rem
  font-size:.32rem
  padding-left:.2rem
  .item-title-icon
    position:relative
    display:inline-block
    left:.02rem
    top:.06rem
    width: .36rem
    height: .36rem
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    background-size: .4rem 3rem
</style>
