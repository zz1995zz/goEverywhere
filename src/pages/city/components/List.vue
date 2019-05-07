<template>
  <div class="list" ref='wrapper'>
    <div>
      <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{this.city}}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div 
        class="button-wrapper" 
        v-for="(item,index) of hot" 
        :key="index"
        @click='handleCityClick(item.name)'
        >
          <div class="button">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div 
    class="area" 
    v-for="(item,index) of cities" 
    :key='index'
    :ref='index'
    >
      <div class="title border-topbottom">{{index}}</div>
      <div class="item-list">
        <div 
        class="item border-bottom"
        v-for="innerItem of item"
        :key="innerItem.id"
        @click='handleCityClick(innerItem.name)'
        >
        {{innerItem.name}}
        </div>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
name:'CityList',
props:{
  cities:Object,
  hot:Array,
  letter:String
},
watch:{
  letter (){
    if(this.letter){
      const element=this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  }
},
computed: {
    ...mapState(['city'])
  },
methods:{
  handleCityClick (city){
    // this.$store.dispatch('changeCity',city)
    this.changeCity(city)
    this.$router.push('/')
  },
  ...mapMutations(['changeCity'])
},
mounted (){
  this.scroll=new BScroll(this.$refs.wrapper)
}

};	
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color:#ccc
  &:after
    border-color:#ccc
.border-bottom
  &:before
    border-color:#ccc
.list
  overflow:hidden
  position:absolute
  top:1.58rem
  left:0
  right:0
  bottom:0
  .title
    background:#eee
    line-height:.5rem
    padding-left:.2rem
    color:#666
    font-size:.26rem
  .button-list
    overflow:hidden
    padding:.1rem .6rem .1rem .1rem
    .button-wrapper
      float:left
      width:33.33%
      .button
        margin:.1rem
        padding:.1rem 0
        text-align:center
        border:.02rem solid #ccc
        border-radius:.06rem
  .item-list
    .item
      line-height:.76rem
      padding-left:.2rem
</style>