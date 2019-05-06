<template>
  <div>
    <div class='title'>
      周末去哪儿玩~~
    </div>
    <ul>
      <li class="item" v-for='(item,index) of recommendsList' :key='index'>
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
	name:'HomeWeekend',
	data() {
		return {
			recommendsList:[
			{
				id:'001',
				imgUrl:'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
				title:'武汉必打卡',
				desc:'到武汉感受神奇的热干面之都'
			},
			{
				id:'002',
				imgUrl:'http://img1.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg',
				title:'三峡人家',
				desc:'感受长江的水三峡的情怀，自古至今，无数骚人墨客浓墨重彩的一笔'
			},
			{
				id:'003',
				imgUrl:'http://img1.qunarzz.com/sight/source/1505/fe/2533da6335a59d.jpg_r_640x214_9fb62f4b.jpg',
				title:'武汉踏青赏花胜地',
				desc:'人间四月芳菲尽，武汉踏青赏花正当时'
			},
			{
				id:'004',
				imgUrl:'http://img1.qunarzz.com/sight/source/1505/4f/95a94c90ef3521.jpg_r_640x214_345412f9.jpg',
				title:'开启亲子时光',
				desc:'远离喧嚣的城市，带孩子去一个幽静，清新的天然氧吧'
			},
			{
				id:'005',
				imgUrl:'http://img1.qunarzz.com/sight/source/1507/e0/4aae49007c8a64.jpg_r_640x214_65a42783.jpg',
				title:'周末出游乐翻天',
				desc:'周末，想去哪儿就去哪儿'
			}
			]
		}
	}
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
.item-img
	width:100%
.item-info
	padding:.2rem
	.item-title
		font-size:.28rem
		line-height:.54rem
		ellipsis()
	.item-desc
		line-height:.4rem
		color:#616161
		ellipsis()
</style>