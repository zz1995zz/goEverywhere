export default {
		// state是state参数
		changeCity (state,city){
			state.city=city
			try {
				localStorage.city=city
			}catch (e){}
	}
}