<template>
   <div id="vid-outerContainer">
       <video id="videostream" class="vid-containers" type="video/webm"></video>
       <div id="video-overlay" class="vid-containers">
           
           <!-- SIDEBAR MENU -->
           <div id="vid-mySidenav" class="vid-sidenav">
             <a href="javascript:void(0)" class="vid-closemenu" @click="closeNav()">&times;</a>
             <a href="#">Photo Story</a>
             <a href="#">Tutorial</a>
             <a href="#">Back to Main</a>
           </div>
           
           <!-- BURGER -->
           <span id="vid-openmenu" style="font-size:30px;cursor:pointer" @click="openNav()">&#9776;</span>

            <!-- IMAGE HANDLER -->          
           <div v-bind:style="{ transform: 'scale(' + scale + ')' }">
              <vue-draggable-resizable :h="height_comp" :scale="scale">
               <img src="../assets/46462438_1572546156223211_4054682576076406784_o.jpg" class="w3-round" alt="OldSarphati">
              </vue-draggable-resizable>
           </div>

           <!-- SLIDER -->
           <div id="toolbar">
             <input type="range" min="0.5" max="3" step="0.1" v-model.number="scale">
             <label>Scale</label>
          </div>

           
           <!-- CAMERA BUTTON -->
           <button id="vid-capture-button">
             <i id="yes-camera" class="fas fa-camera-retro fa-3x"></i>
             <span id="no-camera" class="fa-stack fa-lg">
               <i class="fa fa-camera-retro fa-stack-1x fa-2x"></i>
               <i class="fa fa-ban fa-stack-2x" style="color: #d9534f;"></i>
             </span>
           </button>
           

      
          <!-- COMPASS -->
           <button id="compass">
             <i class="fas fa-compass fa-3x"></i>
           </button>
    </div>
   </div>
</template>
<script>
import Vue from 'vue';


export default {
  data() {
    return {
      //initwidth: document.querySelector(".w3-round")? document.querySelector(".w3-round").width:-1,
      //initheight: document.querySelector(".w3-round")? document.querySelector(".w3-round").height:-1,
      scale: 1.,
    }
  },
   computed:{
      //height_comp(){return this.initheight? (this.initheight+20):(Number(localStorage.getItem("locstoheight"))+20)},
      height_comp(){return Number(localStorage.getItem("locstoheight"))+20},

   },
   
   created(){
         /*
         OBS: I need the size of the draggable component fitting the size of image
         However, this is NOT how apparently this component operates: it looks like it requires a predetermined size
         The problem is that:
         * data about the sizes of the elements are only dynamically obtained after first creation from its parent html element
         * After creation vue LOSES references to `document.querySelector(".w3-round")`, and the values of its attributes are
         set to 0/undefined after any refreshing of the page
         * Because no data is available the component sets the rendering to default size (200x200) or 0x0
         * Another important aspect of Vue is that it doesn't keep values - you need ALWAYS a storage
         A first test for a quick hack is the following:
         1. make some css pre-formatting
         2. make a variable to obtain the initial value of the image from `document` at the moment of creation
         3. save immediately the value in localStorage
         4. create a computed property that check validity of an init value, otherwise check localStorage
         */
      //console.log(document.querySelector('img'));
         if (document.querySelector(".w3-round")) {
            //code
            localStorage.setItem("locstoheight", document.querySelector(".w3-round").height);
            console.log(111, document.querySelector(".w3-round").height, this.height_comp);
         };
   },
  
      methods:{
          openNav() {
              document.getElementById("vid-mySidenav").style.width = "250px";
              document.getElementById("vid-openmenu").style.zIndex = "-1";
            },
            
         closeNav() {
              document.getElementById("vid-mySidenav").style.width = "0";
              document.getElementById("vid-openmenu").style.zIndex = "1";
            }

                
      },
}
</script>
<style>
   
#outerContainer{
      font-family: "Lato", sans-serif;
      color: orange;
    }
    
    #videostream{
        position: relative;
        background-color: #333;
    }
    
    
    #video-overlay {
        position: absolute;
        /*background-color: rgba(0, 0, 0, 0.46);*/
        z-index: 2;
        left: 0;
        top: 0;
      }
    
 
    .vid-containers{
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 7px;
      touch-action: none;
    }

    #vid-container {
      /*background-color: #333;*/
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      position:relative;
    }
    
   /**
    *SIDEBAR
    */
    .vid-sidenav {
        height: inherit;
        width: 0;
        position: fixed;
        z-index: 2;
        top: 10px;
        left: 10px;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
      }
      
      .vid-sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
      }
      
      .vid-sidenav a:hover {
        color: #f1f1f1;
      }
      
      .vid-sidenav .vid-closemenu {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
      }
      
      #vid-openmenu {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 36px;
        z-index: 1;
        transition: 0.5s;
        color: orange;
      }
      
      @media screen and (max-height: 450px) {
        .vid-sidenav {padding-top: 15px;}
        .vid-sidenav a {font-size: 18px;}
      }
   
   
   /* IMAGE VIEWER (draggable-resizable component)
   OBS: .vdr is a class SPECIFIC to the draggable-resizable component */
    .vdr{
      resize:both;
      background-color: rgb(245, 230, 99);
      border: 10px solid rgba(136, 136, 136, .5);
      /*border-radius: 50%;*/
      touch-action: none;
      user-select: none;
    }
    
    .vdr:hover {
      cursor: grab;
      border-width: 20px;
    }

    .vdr:active {
      cursor: grabbing;
      background-color: rgba(168, 218, 220, 1.00);
    }
    
    .vdr img{
        width:100%;
        height:auto;
    }
    
   /**
    *CAMERA and COMPASS BUTTONS
    */

  i { vertical-align: middle; }
  
   #vid-capture-button{
        position: absolute;
        bottom:15px;
        left:15px;
        z-index: 1;
    }
    

   #no-camera{
    display:none;
  }
  
  #compass{
        position: absolute;
        bottom:15px;
        right:15px;
        z-index: 1;
  }
   
   #toolbar {
    position: fixed;
    top: 10px;
    height: 24px;
    padding: 12px 0;
    width: 30%;
    border-top: 1px solid #999;
    background-color: #CCC;
    z-index: 999;
    display:block;
    right:30px;
   }
</style>

