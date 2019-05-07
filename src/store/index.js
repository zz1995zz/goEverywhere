import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		city:'重庆'
	},
	actions:{
		// ctx是上下文
		changeCity (ctx,city){
			ctx.commit('changeCity',city)
		}
	},
	mutations:{
		// state是state参数
		changeCity (state,city){
			state.city=city
		}
	}
})
