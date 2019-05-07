<template>
  <div>
  	<div class="banner" @click='handleBannerClick'>
    <img src="http://img1.qunarzz.com/sight/p0/1501/10/1012e4a2c398409c.water.jpg_600x330_3321a6b0.jpg" class="banner-img">
    <div class="banner-info">
      <div class="banner-title">云雾山(AAAAA景区)</div>
      <div class="banner-number">
        <span class="iconfont">&#xe61e;</span>
        19
      </div>
    </div>
  </div>
  <common-gallary 
  :imgUrl='imgUrl'
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
  data (){
  	return {
  		showGallary:false,
  		imgUrl:[
  		"http://img1.qunarzz.com/sight/p0/1501/10/1012e4a2c398409c.water.jpg_r_800x800_1cd8b126.jpg",
  		"http://img1.qunarzz.com/sight/p0/1501/10/1012e4a2c398409c.water.jpg_r_800x800_1cd8b126.jpg"
  		]
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
