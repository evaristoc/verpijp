<template>
  <!--<div id="app" class="container">
    <div class="row" id="comps">
      <div class="col" id="sidebarcont">
        <sidebar></sidebar>
        <span style="font-size:30px;cursor:pointer" v-on:click="openNav()">&#9776; open</span>
      </div>
      <div class="col-12" id="mapcont">
        <google-map></google-map>
      </div>
    </div>
  </div>-->
  <ec-home></ec-home>

</template>

<script>

export default {
  name: 'app',
  //components:[Home],
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
