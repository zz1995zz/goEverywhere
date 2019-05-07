<template>
  <div>
    <div class="search">
      <input v-model='keyWord' type="text" class='search-input' placeholder="请输入城市城市名或拼音">
    </div>
    <div class="search-content" ref='search' v-show='keyWord'>
      <ul>
        <li 
        class="search-item border-bottom"
        v-for='item of list'
        @click='handleCityClick(item)'
        >{{item}}</li>
        <li v-show='hasNoData' class="search-item border-bottom">没有搜索到该数据</li>
      </ul>
    </div>
  </div>
</template>




<script>
import BScroll from 'better-scroll'
export default {
name:'CitySearch',
props:{
  cities:Object
},
data (){
  return {
    keyWord:'',
    list:[],
    timer:null
  }
},
computed:{
  hasNoData (){
    return !this.list.length
  }

},
methods:{
  handleCityClick (city){
    this.$store.dispatch('changeCity',city)
    this.$router.push('/')
  }
},
watch:{
  keyWord (){
    if(this.timer){
      clearTimeout(this.timer)
    }
    this.timer=setTimeout(() => {
      const result=[]
      for (let i in this.cities){
        this.cities[i].forEach((value) => {
          if(value.spell.indexOf(this.keyWord) != -1||
            value.name.indexOf(this.keyWord) != -1){
            result.push(value.name)
          }
        })
      }
      this.list=result
    },100)
  }
},
mounted() {
  this.scroll=new BScroll(this.$refs.search)
}
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
.search-content
  z-index:1
  position:absolute
  top:1.58rem
  left:0
  right:0
  bottom:0
  background: #eee
  overflow:hidden
  .search-item
    line-height:.62rem
    padding-left:.2rem
    color:#666
</style>