<template>
      <div id="appcontent">
    <ec-main-sidebar></ec-main-sidebar>
    <!--<span id="menu-open" style="font-size:30px;cursor:pointer" v-on:click="openNav()">&#9776; open</span>-->
    <div>
      <ec-map-component></ec-map-component>
    </div>
    
  </div>
</template>
<style>
  /*colors (0to255 -> adobe):
   * background: #BFACAC
   * base: #727272
   * closeto: #7F7F73
   * darker effects: #393D3F
   * mild effects: #ACB8BF
   *
   */
  
      #appcontent {
      /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
      font-family: "Lato", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      /*text-align: center;*/
      /*color: #2c3e50;
      color: #8b9299;*/
      color: #393D3F;
      padding-top: 20px;
      background-color: #BFACAC;
      height: 100%;
    }
    #menu-open{
      padding-left: 20px;
    }
    
h1, h2 {
  font-weight: normal;
}



/*
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#comps {
  display:flex;
  justify-content: space-between;
}

#sidebarcont{
  border: 1px solid red;
}
*/
</style>