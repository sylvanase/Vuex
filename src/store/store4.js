/*
 * @Author: sylvanase
 * @Date:   2018-05-19 23:23:07
 * @Last Modified by:   sylvanase
 * @Last Modified time: 2018-05-20 16:35:02
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

const getters = { // vuex 中的计算属性
	count: function(state) {
		return state.count += 5;
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters
})