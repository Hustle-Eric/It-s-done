<template>
 <div>
   {{test}}
 </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name :"test",
  computed:{
    ...mapState(["test"])
  }
}
</script>

<style lang="stylus" scoped>

</style>