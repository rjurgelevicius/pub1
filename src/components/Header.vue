<template>
  <div id="header">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss" scoped>
#header {
  display: grid;
  background-color: aquamarine;
  border: 1px solid black;
}

#header > div {
  padding: 10px;
  border: 1px solid black;
}
</style>
