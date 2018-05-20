/*
 * @Author: sylvanase
 * @Date:   2018-05-19 23:23:07
 * @Last Modified by:   sylvanase
 * @Last Modified time: 2018-05-20 16:19:34
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

export default new Vuex.Store({
	state,
	mutations
})