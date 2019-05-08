<template>
  <div>
  	<detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class='scroll-bottom'>
      <detail-list :lists='lists'></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data (){
    return {
      lists:[
      {
        title:'成人票',
        children:[
        {
          title:'三馆联合优惠票'
        },
        {
          title:'五馆联合优惠票'
        },
        {
          title:'情侣优惠票',
          children:[
          {
            title:'一日限定情侣套餐'
          },
          {
            title:'多日限定情侣套餐'
          }
          ]
        }
        ]
      },
      {
        title:'学生票'
      },
      {
        title:'儿童票'
      },
      {
        title:'特惠票'
      }
      ]
    }
  }
};
</script>
<style lang="stylus" scoped>
.scroll-bottom
	height:30rem
</style>
