<template>
  <div>
  	<detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class='scroll-bottom'></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components:{
    DetailBanner,
    DetailHeader,
  }
};
</script>
<style lang="stylus" scoped>
.scroll-bottom
	height:30rem
</style>
