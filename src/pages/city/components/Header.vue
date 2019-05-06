<template>
  <div class="header">
    城市选择
    <router-link to='/'>
      <div class="header-left">
        <div class="iconfont header-back">&#xe624;</div>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
name:'CityHeader'
};	
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position:relative
  line-height:$headerHeight
  height:$headerHeight
  background : $bgColor
  color:#fff
  text-align:center
  font-size:.4rem
  .header-back
  	position:absolute
  	top:0
  	left:0
  	font-size:.4rem
  	width:.64rem
  	text-align:center
  	color:#fff
</style>