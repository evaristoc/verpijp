<template>
        <!-- COMPONENT navbar-area START -->
    <div id="navbar-area">
        <!-- COMPONENT toggler-nav START -->
        <div id="toggler-nav">
            <a href="javascript:void(0)" id="closebtn" @click="closeNav()" v-if="!showAboutSect">Go to Map</a>
        </div> <!-- COMPONENT toggler-nav END -->
              
        <!-- COMPONENT sidebar-data START -->
        <div id="sidebar-data">
            
            <!-- COMPONENT header-brand START -->
            <div>
              <h3 class="header-brand">VerPijp <span style="font-size: medium">&rarr;</span> <a href="javascript:void(0)" @click="aboutFunc()" style="display:inline-block;"><strong>{{inmenu}}</strong></a></h3>
            </div> <!-- COMPONENT header-brand END -->
            
            <!-- COMPONENT nav-ctrls START -->
            <div v-if="!showAboutSect">
                <div id="nav-ctrls" class="container">
                    <div class="row">
                        <div id="upperctr">
                            <input id="searchfilter" class="sidebar-upperctr-elem" type="text" v-model="search" placeholder="Search street and/or year">
                        </div>
                        <div>
                            <button @click="selAllMarkers" class="btn btn-outline-warning sidebar-upperctr-elem" id="clearingbtn">Select all</button>
                            <button @click="clearAllMarkers" class="btn btn-outline-warning sidebar-upperctr-elem" id="clearingbtn">Clear all</button>
                        </div>
                        <button id="trackingbtn" class="btn btn-outline-warning" @click=trackingAllowed() style="margin-left:5px;">Tracking?</button>
                    </div>
                </div><!-- COMPONENT nav-ctrls END -->
            </div><!-- !showAboutSect section -->
        </div><!-- COMPONENT sidebar-data END -->
    </div><!-- COMPONENT navbar-area END -->
</template>
<script>
    import Vue from 'vue'
    
    export default {
        props:['filteredLocations', 'locations'],

        data(){
          return {
                    search: '',
                };
        },
        
        mounted(){
            Vue.nextTick().then(()=>{
            this.closeNav();
          });
        },
        
        methods:{
                closeNav() {
                   document.getElementById("mySidenav").style.width = "0px"
                   document.getElementById("menu-open-test").style.marginLeft = "0px"
                   document.getElementById("menu-open-test").style.visibility = "visible"
                  },
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
                selAllMarkers(){ //based on filtered data!!!
                  //console.log(111, this.filteredLocations.length);
                  
                  for(let idx = 0; idx < this.filteredLocations.length; idx++){
                      let jdx = this.filteredLocations[idx].itemid;
                      if ((this.locations[jdx].hasOwnProperty("sel") && this.locations[jdx].sel === false) || !this.locations[jdx].hasOwnProperty("sel")) {
                          let e = {target:{value:jdx}};
                          this.cltMarker(e);
                           
                      }
                      //EventBus.$emit('clear-all-markers');   
                  }
                }, 
                clearAllMarkers(){ //based on filtered data!!!
                  for(let idx = 0; idx < this.filteredLocations.length; idx++){
                      let l = this.locations.filter((v)=>{return v.itemid === this.filteredLocations[idx].itemid})[0]
                      if (l.hasOwnProperty("sel") && l.sel === true) {
                          let e = {target:{value:l.itemid}};
                          this.cltMarker(e)
                      }
                  }
                },
                cltMarker(e){ //an emiter only; currently duplicated between NavMain.. and PhotoGal.. to facilitate redoing
                  let idx = e.target.value;
                  if (document.getElementById("btnaddmark_"+idx)) {
                      if (document.getElementById("btnaddmark_"+idx).classList.contains("btn-outline-info")) {
                          this.locations[idx].sel = true;
                         
                      }else if(document.getElementById("btnaddmark_"+idx).classList.contains("btn-outline-secondary")) {
                          this.locations[idx].sel = false;
                          
                      }
          
                      window.EventBus.$emit('clt-marker', this.locations[idx]);
            
                  }
          
          
                },
                trackingAllowed(){
                  if (this.tracking==false) {
                      this.tracking = true
                  }else{
                      this.tracking = false
                  }
                  window.EventBus.$emit('tracking',{tr:this.tracking})
                },
        }
    }
</script>