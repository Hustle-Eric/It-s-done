<template>
  <div id="app">
    app
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'App',
  async mounted(){
   const body = await this.$http.seller.getSeller();
   console.log(body);
  }
} 
</script> 

<style>
</style>
