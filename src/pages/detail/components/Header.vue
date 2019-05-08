<template>
  <div>
    <router-link
    tag='div'
    to='/'
    class="header-abs"
    v-show='showAbs'
     >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div 
    class="header-fixed" 
    v-show='!showAbs'
    :style='opacityStyle'
    >
      景点详情
      <router-link to='/'>
        <div class="header-left">
          <div class="iconfont header-fixed-back">&#xe624;</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data (){
    return {
      showAbs:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods:{
    handleScorollTop (){
      // pc端chrom只识别了document.documentElement.scrollTop
      //移动端chrom只识别了document.body.scrollTop
      //很奇怪啊？？？
      const scrollTop=document.body.scrollTop || document.documentElement.scrollTop
      if(scrollTop>50){
        const opacity=scrollTop/140
        this.opacityStyle.opacity=opacity>140?1:opacity
        this.showAbs=false
      }else{
        this.showAbs=true
      }
    }
  },
  created (){
    window.addEventListener('scroll',this.handleScorollTop)
  },
  beforeDestroy (){
    // 解绑全局事件
    window.removeEventListener('scroll',this.handleScorollTop)
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position:absolute
  left:.2rem
  top:.2rem
  height:.8rem
  line-height:.8rem
  text-align:center
  width:.8rem
  border-radius:.4rem
  background-color:rgba(0,0,0,.8)
  z-index:99
  .header-abs-back
    color:#fff
    font-size:.4rem
.header-fixed
  position:fixed
  top:0
  left:0
  z-index:99
  width:100%
  line-height:$headerHeight
  height:$headerHeight
  background : $bgColor
  color:#fff
  text-align:center
  font-size:.4rem
  .header-fixed-back
    position:absolute
    top:0
    left:0
    font-size:.4rem
    width:.64rem
    text-align:center
    color:#fff
</style>
