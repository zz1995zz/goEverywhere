<template>
  <div>
  	<div class="banner" @click='handleBannerClick'>
    <img :src="bannerImg" class="banner-img">
    <div class="banner-info">
      <div class="banner-title">{{sightName}}</div>
      <div class="banner-number">
        <span class="iconfont">&#xe61e;</span>
        19
      </div>
    </div>
  </div>
  <common-gallary 
  :gallaryImgs='gallaryImgs'
  v-show='showGallary'
  @close='handleGallaryClose'
  ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components:{
  	CommonGallary,
  },
  props:{
    bannerImg:String,
    gallaryImgs:Array,
    sightName:String
  },
  data (){
  	return {
  		showGallary:false,
  	}
  },
  methods:{
  	handleBannerClick (){
  		this.showGallary=true
  	},
  	handleGallaryClose (){
  		this.showGallary=false
  	}
  }
};
</script>
<style lang="stylus" scoped>
.banner
  position:relative
  overflow:hidden
  height:0
  padding-bottom:55%
  .banner-img
  	width:100%
  .banner-info
	  position:absolute
	  width:100%
	  left:0
	  bottom:0
	  line-height:.6rem
	  display:flex
	  color:#fff
	  padding:0 .2rem
	  box-sizing:border-box
	  background-image:linear-gradient(top, rgba(0,0,0,0),
	  		rgba(0,0,0,.8))
	  .banner-title
	  	flex:1
	  	font-size:.32rem
	  .banner-number
	  	height:.32rem
	  	line-height:.32rem
	  	padding: 0 .2rem
	  	border-radius:.2rem
	  	background-color:rgba(0,0,0,.8)
	  	margin-top:.14rem
	  
</style>
