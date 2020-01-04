<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>
<script>
export default {
  name: 'app',

  data () {
      return {
      }
    },
    //methods:{
    //  openNav() {
    //    window.EventBus.$emit("mySidenavopen", {width:0});
    //  }
    //}
  }

</script>
