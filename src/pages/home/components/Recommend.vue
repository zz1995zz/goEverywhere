<template>
  <div>
    <div class='title'>
      <span class="iconfont">&#xe85c;</span>
      热门推荐
    </div>
    <ul>
      <router-link 
      tag='li'
      :to="'/detail/' + item.id"
      class="item" 
      v-for='(item,index) of list' 
      :key='index'
      >
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
	name:'HomeRecommend',
  props:{
    list:Array
  }
	// data() {
	// 	return {
	// 		recommendList:[
	// 		{
	// 			id:'001',
	// 			imgUrl:'http://img1.qunarzz.com/sight/p0/1501/f8/f8413365ed3e77ab.water.jpg_200x200_db81bbda.jpg',
	// 			title:'木兰草原',
	// 			desc:'武汉最好玩的地方，期待你的到来！'
	// 		},
	// 		{
	// 			id:'002',
	// 			imgUrl:'http://img1.qunarzz.com/sight/p0/1501/10/1012e4a2c398409c.water.jpg_200x200_366b12f8.jpg',
	// 			title:'云雾山',
	// 			desc:'武汉最好玩的地方，期待你的到来！'
	// 		},
	// 		{
	// 			id:'003',
	// 			imgUrl:'http://img1.qunarzz.com/sight/p0/1904/67/67de943a3d97215ba3.img.jpg_200x200_92497328.jpg',
	// 			title:'武汉欢乐谷',
	// 			desc:'武汉最好玩的地方，期待你的到来！'
	// 		},
	// 		{
	// 			id:'004',
	// 			imgUrl:'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg',
	// 			title:'武汉海昌极地乐园',
	// 			desc:'武汉最好玩的地方，期待你的到来！'
	// 		},
	// 		{
	// 			id:'005',
	// 			imgUrl:'http://img1.qunarzz.com/sight/p0/1805/f9/f9fa2c4b30dc9f5aa3.img.jpg_200x200_165f7560.jpg',
	// 			title:'木兰天池',
	// 			desc:'武汉最好玩的地方，期待你的到来！'
	// 		},
	// 		{
	// 			id:'006',
	// 			imgUrl:'http://img1.qunarzz.com/sight/p0/201403/11/1f70100804193c28f8b71378c0faa49e.jpg_200x200_2b9d2349.jpg',
	// 			title:'户部巷',
	// 			desc:'武汉最好玩的地方，期待你的到来！'
	// 		}
	// 		]
	// 	}
	// }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
.title
  line-height:.8rem
  background:#eee
  text-indent:.2rem
  font-size:.32rem
  margin-top:.2rem
  .iconfont
  	color:red
.item
  height:1.9rem
  overflow:hidden
  display:flex
  padding: .2rem 0
  padding-left:.1rem
  .item-img
  	height:2rem
  	width:2rem
  	padding:.1rem
  .item-info
  	flex:1
  	padding:.1rem
  	.item-title
  		font-size:.32rem
  		line-height:.54rem
  		ellipsis()
  	.item-desc
  		line-height:.4rem
  		color:#ccc
  		ellipsis()
  	.item-button
  		background:#ff9300
  		color:#fff
  		line-height:.44rem
  		margin-top:.55rem
  		padding:0 .2rem
  		border-radius:.06rem
</style>