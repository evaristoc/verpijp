<template>
        <transition appear>
        
     	<div class="container" style="color: #001011;">
            <div class="row mt-1">
                <div class="col-12">
                    <!--<img src="https://i.ibb.co/zbF6Kt9/8232820489-579018c1cd-b.jpg" class="float-left" width="100%">-->
					<img :src="myitemdata.picture" class="float-left" width="100%">
				</div>
            </div>
            <!--<div class="row mt-1">
                <div class="col-12">
                    What is the name of the business with this window?
                </div>
            </div>-->
			<!-- A grey horizontal navbar that becomes vertical on small screens -->
		<div class="row mt-1">
        
        <!--<ul>
				  <li><a href="#home">Home</a></li>
				  <li><a href="#news">News</a></li>
				  <li><a href="#contact">Contact</a></li>
				  <li><a href="#about">About</a></li>
				</ul>
				<nav class="nav">
				  
				  <!--<a class="nav-link active" href="#"><span><img :src="iconType(myhunt.useas)"></span>History</a>
				  <a class="nav-link" href="#">Camera</a>
				  <a class="nav-link" href="#">Game</a>
				  <a class="nav-link disabled" href="#">Disabled</a>
				</nav>-->

            </div>
            <div class="row mt-1">
                <div class="col-12" role="group">
                   <h3>{{myitemdata.street}}</h3>
				<ul>
          <li v-if="myitemdata.useas == 'hist'"><span><img src="http://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/24/blue-camera-icon.png"></span> <a href="#">Some De Pijp History...</a></li>
				  <li v-if="myitemdata.useas == 'spot' || myitemdata.useas == 'errant' || myitemdata.useas == 'hist'"><span><img src="http://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/24/red-camera-icon.png"></span>  <a :href="'./#/imageoverlay?itemid='+myitemdata.itemid">Try Image Overlay</a></li>
				  <li v-if="myitemdata.useas == 'errant'"><span><img src="http://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/24/yellow-camera-icon.png"></span> <a :href="'./#/collects?nodeimg='+myitemdata.imgid">Play an Errant Game</a></li>
				</ul>
          <p>YEAR: <b>{{myitemdata.year}}</b></p>
          <p>COPYRIGHT: <b>Public/Unkonwn</b></p>
          <p>SOURCE: <b>{{myitemdata.source}}</b></p>  
          </br>
					<p v-if="!myitemdata.gamedata.descrip">Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>-->
					<p>{{myitemdata.gamedata.descrip}}</p>
                </div>
            </div>
        </div>
    </transition>
    <!--<transition appear>
        <h2>Answer</h2>
    </transition>-->
</template>
<script>
    export default {
        props:['myitemdata'],
		methods:{
        },
    }

        //f17808 f0a500 f9d89c e8ead3 fbd46d ffcb74 ffc847
        //0FA9E6 001011 757780 FFFFFC 98CE00
</script>
<style>

h3 {
    font-weight: 900;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  overflow: hidden;
}


li {
  /*float: left;
  
  */
  background-color: #F0EBE6;
  padding: 1px 10px 2px;
    
}

a {
    color: #1755ff;
    font-weight: 900;
}

p {
    margin: 0px;
    color: #001011;
    font-size: 1.2rem;
    font-weight: 90;
}

/*li a {
  display: block;
  padding: 0px;
  background-color: #dddddd;
}*/


 .v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>