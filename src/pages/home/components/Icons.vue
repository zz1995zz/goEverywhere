<template>
	<swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for='(page,index) of pages' :key='index'>
      	<div class="icons">
		<div class="icon" v-for='item of page' :key='item.id'>
			<div class="icon-img">
				<img :src="item.imgUrl" class="icon-img-content">
			</div>
			<p class='icon-desc'>{{item.desc}}</p>
		</div>
	</div>
      </swiper-slide>  
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
export default {
name:'HomeIcons',
props:{
	list:Array
},
data() {
	return {
		swiperOption: {
        pagination: '.swiper-pagination',
       }
		// iconList:[
		// {
		// 	id:'001',
		// 	imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
		// 	content:'景点门票'
		// },
		// {
		// 	id:'002',
		// 	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
		// 	content:'一日游'
		// },
		// {
		// 	id:'003',
		// 	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
		// 	content:'武汉必游'
		// },
		// {
		// 	id:'004',
		// 	imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
		// 	content:'亲子游'
		// },
		// {
		// 	id:'005',
		// 	imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
		// 	content:'游乐场'
		// },
		// {
		// 	id:'006',
		// 	imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
		// 	content:'动植物园'
		// },
		// {
		// 	id:'007',
		// 	imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
		// 	content:'踏青赏花'
		// },
		// {
		// 	id:'008',
		// 	imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
		// 	content:'武汉欢乐谷'
		// },
		// {
		// 	id:'009',
		// 	imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
		// 	content:'极地海洋'
		// },
		// {
		// 	id:'010',
		// 	imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
		// 	content:'东湖绿道'
		// }

		// ]
	}
},
computed:{
	pages() {
		const pages=[]
		this.list.forEach((item,index)=>{
			const page=Math.floor(index/8)
			if(!pages[page]){
				pages[page]=[]
			}
			pages[page].push(item)
		})
		return pages
	}
}
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.icons
  overflow:hidden
  height:0
  padding-bottom:50%
  .icon
  	position:relative
  	overflow:hidden
  	height:0
  	float:left
  	width:25%
  	padding-bottom:25%
  	.icon-img
  		position:absolute
  		width:100%
  		left:0
  		right:0
  		top:0
  		bottom:.44rem
  		box-sizing:border-box
  		padding:.1rem
  		padding-bottom:0
  	.icon-img-content
  		display:block
  		margin:0 auto
  		height:100%
  .icon-desc
  	position:absolute
  	left:0
  	right:0
  	bottom:0
  	height:.44rem
  	line-height:.44rem
  	text-align:center
  	color:$darkTextColor
  	ellipsis()
</style>