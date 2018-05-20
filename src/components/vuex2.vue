<template>
  <div id="app">
    <h1>state 单一状态树</h1>
    <p>count from store: {{ $store.state.count }}</p>
    <p>使用属性计算方式获取count： {{ count }}</p>
    <p><button @click="$store.commit('add')">add</button> <button @click="$store.commit('minus')">minus</button></p>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'App',
  data(){
  	return {
  		//count: 0
  	}
  },
  /*computed:{
	count(){
		return this.$store.state.count;
	}
  }*/
  computed:mapState({
  	count:state => state.count
  })
  /*computed:mapState([  计算属性名与state子节点名称相同，可传字符串数组
	count  
  ])*/
}
</script>

<style>

</style>
