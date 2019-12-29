<template>
<div id="demo" class="carousel slide" data-ride="carousel">

  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <!-- The slideshow -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2019/03/10/19/25/sunset-4047037_960_720.jpg" alt="Los Angeles">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2019/03/11/15/05/landscape-4048720_960_720.jpg" alt="Chicago">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2019/03/08/15/05/landscape-4042502_960_720.jpg" alt="New York">
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>
</template>
<script>

export default {
  name: 'MyCarousel',
  components:{
  },
  data () {
    return {
       }
  },
}
</script>
<style>
    /* Make the image fully responsive */
  .carousel-inner img {
      width: 100%;
      height: 100%;
  }
</style>