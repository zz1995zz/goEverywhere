<template>
	<div>
		<city-header></city-header>
		<city-search
		:cities='cities'
		></city-search>
		<city-list 
		:cities='cities' 
		:hot='hot'
		:letter='letter'
		></city-list>
		<city-alphabet 
		:cities='cities'
		@change='handleLetterChange'
		></city-alphabet>
	</div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
  	CityHeader,
  	CitySearch,
  	CityList,
  	CityAlphabet,
  },
  data() {
  	return{
  		hot:[],
  		cities:{},
  		letter:''
  	}
  },
  methods:{
  	getCityInfo(){
  		axios.get('https://easy-mock.com/mock/5cd2cc415110c02a69f7b506/goEverywhere-show/city.json')
  			.then(this.getCityInfoSucc)
  	},
  	getCityInfoSucc(res){
  		res=res.data
  		if(res.ret&&res.data){
  			const data=res.data
  			this.hot=data.hotCities
  			this.cities=data.cities
  		}
  	},
  	handleLetterChange (letter){
  		this.letter=letter
  	}

  },
  mounted() {
  	this.getCityInfo()
  }
};

</script>

<style lang='stylus' scoped>
	
</style>