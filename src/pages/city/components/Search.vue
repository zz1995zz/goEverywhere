<template>
  <div class="search">
    <input type="text" 
    class='search-input' 
    placeholder="请输入城市城市名或拼音">
  </div>
</template>


<script>
export default {
name:'CitySearch'
};	
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height:.72rem
  background :$bgColor
  padding:0 .1rem
  .search-input
    box-sizing:border-box
    text-align:center
    width:100%
    line-height:.62rem
    height:.62rem
    color:#666
    padding:0 .1rem
    border-radius:.06rem
</style>