/*
 * @Author: sylvanase
 * @Date:   2018-05-19 23:23:07
 * @Last Modified by:   sylvanase
 * @Last Modified time: 2018-05-19 23:42:41
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 1
}

const mutations = {
	add(state) {
		state.count++;
	},
	minus(state) {
		state.count--;
	}
}

export default new Vuex.Store({
	state,
	mutations
})