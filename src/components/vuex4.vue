<template>
  <div id="app">
    <h1>getter</h1>
    <p>count from store: {{ $store.state.count }}</p>
    <p>使用属性计算方式获取count： {{ count }}</p>
    <p><button @click="add">add</button> <button @click="$store.commit('minus', {a: 10})">minus</button></p>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'

export default {
  name: 'App',
  data(){
  	return {
  		//count: 0
  	}
  },
  computed:{
    ...mapState({
    	count:state => state.count
    }),
    /*count(){
      return this.$store.getters.count
    },*/
    ...mapGetters(['count'])
  },
  /*computed:mapState([  计算属性名与state子节点名称相同，可传字符串数组
	count  
  ])*/
  methods:{
    ...mapMutations(['add']),
    /*...mapMutations({
      add: 'add'
    })*/
  }
}
</script>

<style>

</style>
