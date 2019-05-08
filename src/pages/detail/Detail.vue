<template>
  <div>
  	<detail-header></detail-header>
    <detail-banner 
    :bannerImg='bannerImg' 
    :gallaryImgs='gallaryImgs'
    :sightName='sightName'
    >
    </detail-banner>
    <div class='scroll-bottom'>
      <detail-list :categoryList='categoryList'></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data (){
    return {
      bannerImg:'',
      categoryList:[],
      gallaryImgs:[],
      sightName:'',
    }
  },
  methods:{
    getDtailInfo (){
      axios.get('https://easy-mock.com/mock/5cd2cc415110c02a69f7b506/goEverywhere-show/detail.json',{
        params:{
          id:this.$route.params.id
        }
      })
      .then(this.getDtailInfoSucc)
    },
    getDtailInfoSucc (res){
      res=res.data
      if(res.ret&&res.data){
        const data=res.data
        this.bannerImg=data.bannerImg
        this.categoryList=data.categoryList
        this.gallaryImgs=data.gallaryImgs
        this.sightName=data.sightName
      }
    }
  },
  mounted (){
    this.getDtailInfo()
  }
};
</script>
<style lang="stylus" scoped>
.scroll-bottom
	height:30rem
</style>
