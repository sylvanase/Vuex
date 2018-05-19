<template>
  <div id="app">
    <h1>vuex base</h1>
    <p>count from store: {{ $store.state.count }}</p>
    <p><button @click="$store.commit('add')">add</button> <button @click="$store.commit('minus')">minus</button></p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
