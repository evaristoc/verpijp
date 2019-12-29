<!-- COMPONE template START -->
<template>
    
    <!-- COMPONENT sidebar START -->
    <div class="sidenav">

        <!-- COMPONENT Modal START-->
        <div class="modal fade" id="myModal" style="background-color: rgba(0, 0, 0, 0.6);">
              <!-- REFERENCES -->
              <!--https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_modal&stacked=h-->
              <!--https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img-->
            <div class="modal-dialog modal-dialog-centered modal-sm">
              <div class="modal-content mb-0 p-0" style="background-color: rgba(255, 255, 255, 0.6);">
                <!-- Modal body -->
                <div class="modal-body">
                  <div class="container-fluid">
                    <button type="button" class="btn btn-warning close-modal" @click="closeModal()">&times;</button>
                    <img class="img-fluid" id="img01" style="height:100%; width:100%;">
                  </div>
                </div>
                <!-- Modal Footer -->
                <div class="modal-footer">
                  <h5 id="modal-title" style="color:blue"></h5>
                </div>
              </div>
            </div>
        </div><!-- COMPONENT Modal END-->

    
      <!-- COMPONENT mySidebar START -->
      <div class="childsidenav" id="mySidenav">
        
        <ec-nav-main-sidebar :locations="locations" @efilteredLocations="transLocation = $event"></ec-nav-main-sidebar> <!-- this component manages all the required data -->
        <ec-photo-gallery :locations="locations" :filteredLocations="transLocation"></ec-photo-gallery> <!-- this component listen to changes in the data -->
        <!-- COMPONENT about START -->
        <ec-general-about></ec-general-about>
        <!-- COMPONENT about END -->

    </div> <!-- COMPONENT mySidebar END -->
    
    <span class="childsidenav" id="menu-open-test" v-on:click="openNav()" style="display:inline-block; font-size:30px;cursor:pointer;">&#9776<span style="color:#BFACAC;">_</span>VerPijp</span>
  
  </div> <!-- COMPONENT sidebar END -->

</template> <!-- COMPONENT template END -->
<script>
  import Vue from 'vue';
  
  import {verdata} from '../assets/verpijptest.js'
    for(let i=0; i < verdata.output.length; i++){
        verdata.output[i].currentclass = "'btn btn-outline-info btn-street'";
        verdata.output[i].sel = false;
    }
  
   
  export default {
    data(){
      return {

        showAboutSect: false,
        cl1: "'btn btn-outline-info btn-street'",
        inmenu: 'About',
        center: window.EventBus.depijpcenter,
        locations: verdata.output,
        transLocation:[],

        /*locations: [
                  {
                  "itemid":0,
                  "lng":4.889855,
                  "lat": 52.3549173,
                  "street":"Albert Cuypstraat 75",
                  "picture":"https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/50796950_1631349163676243_1282903763492798464_n.jpg?_nc_cat=109&_nc_ht=scontent-amt2-1.xx&oh=d4f9f18af5108ea5b65d4a1f886887c3&oe=5D2626A3",
                  "year":1969
                  },
                  {
                  "itemid":1,
                  "lng":4.8901227,
                  "lat": 52.3547195,
                  "street":"Ferdinand Bolstraat 84-86",
                  "picture":"https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/40641496_1507485882729239_7087404085233582080_n.jpg?_nc_cat=110&_nc_ht=scontent-amt2-1.xx&oh=edb205cf8e8b6e2bebac912ab350ed35&oe=5CEFED17",
                  "year":1930
                  },
                  {
                  "itemid":2,
                  "lng":4.8910285,
                  "lat": 52.3551092,
                  "street":"Albert Cuypstraat 80",
                  "picture":"https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/47190351_1585615151582978_5862906576976740352_n.jpg?_nc_cat=108&_nc_ht=scontent-amt2-1.xx&oh=bbb979b20ee2d7b95ae589ed6dca68de&oe=5CF11BF3",
                  "year":1905
                  }
                  ],
       */

      };
    },
    created(){
  
    },
    mounted(){
        
        
        
        Vue.nextTick().then(()=>{
        this.closeNav();
      });
    },
    methods: {
        aboutFunc(){
            this.showAboutSect = !this.showAboutSect;
            if (this.showAboutSect) {
                this.inmenu = 'Images';
                document.getElementById("mySidenav").style.overflow = "scroll";
                document.getElementById("wrap-data-area").style.height = "50px"; //A hack!!!: a large empty area shows if height not controlled
            }else{
                this.inmenu = 'About';
                document.getElementById("mySidenav").style.overflow = "hidden";
                document.getElementById("wrap-data-area").style.height = "100%";
            }
        },

      openNav(){
            document.getElementById("mySidenav").style.width = "100%";
            //document.getElementById("mySidenav").style.display = "block";
            document.getElementById("menu-open-test").style.marginLeft = "100%";
            document.getElementById("menu-open-test").style.visibility = "hidden";
            this.$router.push({path:'/main/gallery'});
      },

      closeModal(){
        //let span = document.getElementsByClassName("close-modal")[0];
        let modal = document.getElementById('myModal');
        modal.classList.remove('show');
        modal.style.display = "none";
      }
    }
  }


    //REFERENCES:
    //-- MY SITE: https://verpijp.firebaseapp.com/
    //-- https://www.w3schools.com/howto/howto_js_sidenav.asp
    //-- https://blog.jscrambler.com/communicating-between-vue-2-components-and-google-maps/
    // map styling:
    //---- current:
    //------ https://snazzymaps.com/style/252512/grayscale-labeled

</script>
<style>
    .item-title{
        text-transform:capitalize;
    }
  /*colors (0to255 -> adobe):
   * background: #BFACAC
   * base: #727272
   * closeto: #7F7F73
   * darker effects: #393D3F
   * mild effects: #ACB8BF
   *
   */
  
    /*
    #sidebar-data {
    min-width: 250px;
    max-width: 250px;
    top: 0;
    left: 0;
    z-index: 1;
   }
   

   
#menu-open-test{
    transition: 0.5s;
}
   */
    
/*==========================
 *
 *General sidenav (sliding to the sides and styling)
 *
 *==========================*/
.sidenav {
  width: 0px;
  font-family: "Lato";
}

#mySidenav {
    /*display:none;*/
}

.sidenav > #mySidenav {
  height: 100%;
  width: 0px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  /*background-color: #111;
  background-color:rgba(17,17,17,0.8);*/
  background-color:rgba(57,24,25,0.8); /*era 57,51,53 pero este rojo esta cool...*/
  /*overflow-x: hidden;*/
  overflow: hidden;
  padding-top: 60px;
  /*color: #fff;*/
  color: #b8bdbf;
  transition: 0.5s;  
}


/*==========================
 *
 *Upper menu additional styling (also bootstrap)
 *
 *==========================*/

/*.sidenav h3 {
 text-align: center;
}*/


#wrap-data-area {
  display: flex;
  flex-direction: column;
  flex-wrap:no-wrap;
  /*min-height:100vh;*/
  height: 100%;
  min-height: 0%;
}

#navbar-area{
  flex: 0 1 0;
  margin-bottom: 10px;
}

#mySidenav #header-brand {
    position: absolute; /*respect to WINDOW!*/
    top: 40px;
    left: 25px; 
}

#nav-ctrls{
    margin-top:30px;
}

#nav-ctrls .btn, #nav-ctrls input{
    margin-left:3px;
}

#nav-ctrls .btn{
    margin-top:3px;
}
/*==========================
 *
 *Gallery
 *
 *==========================*/

#sel-gallery{
    /*overflow: scroll;
    height: 300px;
    max-height:730px;*/
    flex: 1 1 0;
    overflow-y:scroll;
}



/*==========================
 *
 *Images
 *
 *==========================*/

 .responsive-image{
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
 }
 
 .responsive-image:hover {opacity: 0.7;}

/*==========================
 *
 *Closing X-icon
 *
 *==========================*/

 
#mySidenav a {
 /*.navbar-brand, #closebtn{*/
  text-decoration: none;
  font-size: 25px;
  /*color: #818181;*/
  color: #afafaf;
  transition: 0.3s;
}

#mySidenav a:hover {
/*.navbar-brand, #closebtn: hover{*/
  color: #f1f1f1;
}
 
#mySidenav #closebtn {
  padding: 8px 8px 8px 32px;
  position: absolute;
  display: block;
  top: 0px;
  right: 15px;
  /*font-size: 36px;*/
  font-size: 15px;
  margin-left: 50px;
}

/*==========================
 *
 *Table of streets additional styling (also bootstrap)
 *
 *==========================*/

#mySidenav td {
 white-space:nowrap;
 padding: 0 20px;
}

.btn-street{
    padding: 3px;
    margin-left: 5px;
    /*border: none;
    background: none;*/
}

/*==========================
 *
 *About section
 *
 *==========================*/

  #myphoto{
    width:150px;
    height:200px;
    float: right;
  }


/*==========================
 *
 *Media styling
 *
 *==========================*/
/*https://www.taniarascia.com/how-to-build-a-responsive-image-gallery-with-flexbox/?utm_source=designernews*/
@media screen and (min-width: 600px) {
  .grid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .cell {
    width: calc(100% / 3);
  }
}

@media screen and (min-width: 1000px) {
  .cell {
    width: calc(100% / 4);
  }
}

@media screen and (max-height: 800px) {

}

@media screen and (max-width: 450px) {
  h3 {
    /*font-size: 40px;
    text-align:justify !important;*/
  }
  
  #myphoto{
    width:90px;
    height:120px;
  }
  
  /*.sidebar-header h3,button{
    display: inline-block;
    float: left;
  }*/
  
  #mySidenav {
    /*padding-top: 15px;*/
    font-size: 20px;
  }

  .btn {
    font-size:20px;
  }
  /*#mySidenav a {font-size: 18px;}*/
}

</style>
        <!--<div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
        
                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
        
                </div>
            </nav>
&times;
&#9776
style="position:absolute;float:left;"
  h3 {
    font-size: 35px;
    text-align:justify !important;
  }
  
  #mySidenav {
    /*padding-top: 15px;*/
    font-size: 20px;
  }
  .btn {
    font-size:30px;
  }
  /*#mySidenav a {font-size: 18px;}*/
  
  #nav-ctrls {
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-around;
    background-color: DodgerBlue;*/
}

#nav-ctrls .btn {
    /*border: none;*/ 
}

#upperctr{
    float:right;
    position:relative;
}

#sidebar-header {
    /*text-align: center;
    float: left;*/
    display: inline-block;
    margin: 6px 8px 8px 0px;
    
  }

#upperctr input, button{
    /*margin-left: 10px;*/
    display: inline-block;
} 

#searchfilter{
    margin: 8px 0px 8px 10px;
}

.sidebar-upperctr-elem {

}

#clearingbtn {
 /*text-align: center;*/
}
style="margin-top:30px;display:flex;flex-direction:row;justify-content:flex-start;"
style="display:flex;flex-direction:row;"