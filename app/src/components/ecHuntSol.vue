<template>
        <transition appear>
        
     	<div class="container" style="color: #001011;">
            <div class="row mt-1">
                <div class="col-12" style="position:relative;">
                    <!--<img src="https://i.ibb.co/zbF6Kt9/8232820489-579018c1cd-b.jpg" class="float-left" width="100%">-->
                    <img :src="itempic" class="float-left" width="100%">
                    <div v-if="itemuseas == 'spot' || itemuseas == 'explore' || itemuseas == 'story'" style="position:absolute; bottom:10px; right:20px;"><span><img src="http://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/24/red-camera-icon.png"></span>  <a :href="'./#/imageoverlay?itemid='+itemid" style="color:white; text-shadow: 2px 2px #ff0000;">Try Image Overlay</a></div>
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
                   <h3>{{itemstreet}}</h3>
                        <p>YEAR: <b>{{itemyear}}</b></p>
                        <p>AUTHOR: </p>
                        <p>SOURCE: <b>{{itemsource}}</b></p>  
                        <p>COPYRIGHT: <b>Public/Unkonwn</b></p>
                        </br>
                      <ul>
                        <li v-if="itemuseas == 'explore'"><span><img src="http://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/24/green-camera-icon.png"></span> <a :href="'./#/collects?nodeimg='+itemimgid">Play a Treasure Hunt Game!</a></li>
                      </ul>
                        <div v-if="itemuseas == 'story' || itemuseas == 'collectable'">
                            <h3 v-if="itemuseas == 'story'"><span><img src="http://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/24/blue-camera-icon.png"></span> Did you know that..?</h3>
                            <h3 v-if="itemuseas == 'collectable'">Answer: {{itemgamesol}}</h3>
                            <p v-if="itemgamedescrip == ''">Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>-->
                            <p>{{itemgamedescrip}}</p>          
                        </div>
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
        computed:{
            itemgamedescrip(){
                if (this.myitemdata && this.myitemdata.gamedata && this.myitemdata.gamedata.descrip) {
                    //code
                    return this.myitemdata.gamedata.descrip;
                }else{
                    return '';
                }
            },
            itemid(){
                if (this.myitemdata) {
                    //code
                    return this.myitemdata.itemid;
                }else{
                    return '';
                }
            },
            itemimgid(){
                if (this.myitemdata) {
                    //code
                    return this.myitemdata.imgid;
                }else{
                    return '';
                }
            },
            itemyear(){
                if (this.myitemdata) {
                    //code
                    return this.myitemdata.year;
                }else{
                    return '';
                }
            },
            itemsource(){
                if (this.myitemdata) {
                    //code
                    return this.myitemdata.source;
                }else{
                    return '';
                }
            },
            itempic(){
                if (this.myitemdata) {
                    //code
                    return this.myitemdata.picture;
                }else{
                    return 'https://weownrotterdam.nl/app/uploads/2019/06/BLACK.jpg';
                }
            },
            itemuseas(){
                if (this.myitemdata) {
                    //code
                    return this.myitemdata.useas;
                }else{
                    return 'spot';
                }
            },
            itemstreet(){
                if (this.myitemdata) {
                    //code
                    return this.myitemdata.street;
                }else{
                    return '(unknown)';
                }
            },
            itemgamesol(){
                if (this.myitemdata && this.myitemdata.gamedata && this.myitemdata.gamedata.answer) {
                    //code
                    return this.myitemdata.gamedata.answer;
                }else{
                    return '(unknown)';
                }
            },
        },
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