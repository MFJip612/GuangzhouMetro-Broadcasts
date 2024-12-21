import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import '7.css/dist/7.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()