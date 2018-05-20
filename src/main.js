// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/vuex6' // 在此修改对应的组件
import store from './store/store6'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	store,
	components: {
		App
	},
	template: '<App/>'
}).$mount('#app');