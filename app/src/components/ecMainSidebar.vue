<!-- COMPONE template START -->
<template>
    
    <!-- COMPONENT sidebar START -->
    <div class="sidenav">
    
      <!-- COMPONENT mySidebar START -->
      <div class="childsidenav" id="mySidenav">
        
        <!-- COMPONENT wrap-data-area START -->
        <div id="wrap-data-area">
            <ec-nav-main-sidebar :filteredLocations="filteredLocations" :locations="locations"></ec-nav-main-sidebar>
            </br>
            </br>
            <ec-photo-gallery :filteredLocations="filteredLocations" :locations="locations"></ec-photo-gallery>
          </div>
          
          
          <!-- COMPONENT about START -->
          <div id="about" style="margin:10px 20px;" v-if="showAboutSect">
              <div>
                <h4 style="margin: 30px 20px;"><u>About VerPijp</u></h4>
                
                <h5><u><i>What?</i></u></h5>
                <p>This proof-of-concept sketches a browsing alternative through collections of historical images of De Pijp, geocoded at the approximated locations where the images were taken. Current source is <i>Stadarchief Amsterdam</i> API. The resulting demo site is part of a broader personal project: <i>De Pijp Experiment</i> - proof-of-concept sites focused on solutions/alternatives for De Pijp neighborhood by De Pijp neighbors.</p>
                
                <h5><u><i>Why?</i></u></h5>
                <p>People trend to create stronger bonds to places for which they know its history and its subculture. The goal of this concept is to help neighbors and visitors to create that bond to De Pijp neighbourhood through old images. It takes inspiration from diferent directions:
                <ul>
                    <li>My kid, who for some time showed an special interest in history</li>
                    <li>Some enthusiastic neighbors who have been sharing with me details of the history of De Pijp and Amsterdam</li>
                    <li>Previous initiatives: www.oldsf.org and its Amsterdam clone, www.oudams.nl; London Museum's StreetMuseum and its Dutch counterpart, Street Museum NL (onh.nl); "Verbeelding aan de Amstel" Exhibition; others</li>
                </ul>
                </p>
                
                <h5><u><i>For Who?</i></u></h5>
                <p>The project tests a light tool destinated to the general public, no matter the background, who want to inmerse into the historical context of the neighborhood. It could be also thought as a tool for students and those in the educative sector.</p>
                
                <h5><u><i>Who?</i></u></h5>
                <img id="myphoto" src="../assets/20140525_151620.png">
                <p>Hi. My name is Evaristo and I have been learning to code during my free time. Enjoy problem-solving and trouble-shooting. I also have a passion for data and data-driven projects. I speak Python, Javascript, SQL, and a bit of other foreign languages. "Simplicity" and "Social" drive me in.</p>
              </div>
          </div><!-- COMPONENT about END -->
        

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

    </div> <!-- COMPONENT mySidebar END -->
    
    <span class="childsidenav" id="menu-open-test" v-on:click="openNav()" style="display:inline-block; font-size:30px;cursor:pointer;">&#9776<span style="color:#BFACAC;">_</span>VerPijp</span>
  
  </div> <!-- COMPONENT sidebar END -->

</template> <!-- COMPONENT template END -->
<script>
  import Vue from 'vue'
  import {verdata} from '../assets/verpijptest.js'
    for(let i=0; i < verdata.output.length; i++){
        verdata.output[i].currentclass = "'btn btn-outline-info btn-street'";
        verdata.output[i].sel = false;
    }
   
  export default {
    data(){
      return {
        search: '',
        showAboutSect: false,
        tracking: false,
        cl1: "'btn btn-outline-info btn-street'",
        inmenu: 'About',
        center: window.EventBus.depijpcenter,
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
        locations: verdata.output,
      };
    },
    computed:{
        columns() {
            if (this.locations.length === 0) {
                return [];
            }
            return Object.keys(this.locations[0].shift())
        },
        filteredLocations(){ //filtered items/markers
            if (!this.locations.length) {
                return [];
            }
            return this.locations.filter(loc => {
                    //console.log(loc)
                    let nosearch = this.search ==='' || this.search ===' '
                    if (nosearch) {
                        return true
                    }
                    return [loc.street +' '+ loc.year][0].toLowerCase().includes(this.search.toLowerCase())
                })
        }
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
            document.getElementById("mySidenav").style.width = "100%"
            //document.getElementById("mySidenav").style.display = "block"
            document.getElementById("menu-open-test").style.marginLeft = "100%"
            document.getElementById("menu-open-test").style.visibility = "hidden"
      },
      trackingAllowed(){
        if (this.tracking==false) {
            this.tracking = true
        }else{
            this.tracking = false
        }
        window.EventBus.$emit('tracking',{tr:this.tracking})
      },
      openModal(loc){
        let modal = document.getElementById('myModal');
        let img = document.getElementById(this.idConcat(loc.itemid+'_img'));
        let captionText = document.getElementById("modal-title");
        //console.log(img.src);
        let modalImg = document.getElementById("img01");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = loc.street+", "+loc.year;
        modal.classList.add('show');
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