/*
 * @Author: sylvanase
 * @Date:   2018-05-19 23:23:07
 * @Last Modified by:   sylvanase
 * @Last Modified time: 2018-05-20 17:18:43
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 1
}

const mutations = { // mutations必须是同步函数，都是同步事务
	add(state) {
		state.count++;
	},
	minus(state, obj) {
		state.count -= obj.a;
	}
}

const actions = { // actions 通常为异步
	addPlus(context) { //context可理解为指代整个store
		context.commit('add', {
			a: 2
		})
	},
	minusPlus({
		commit
	}) {
		commit('minus', {
			a: 2
		})
	}
}

const moduleA = {
	state,
	mutations,
	actions
}

const moduleB = {
	state: {
		countB: 1000
	}
}


export default new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB
	}
})