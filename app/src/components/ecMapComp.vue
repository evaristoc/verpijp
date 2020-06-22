<template>
    <div>
        <div class="modal fade" id="myModal_map" style="background-color: rgba(0, 0, 0, 0.6);">
              <!-- REFERENCES -->
              <!--https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_modal&stacked=h-->
              <!--https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img-->
            <div class="modal-dialog modal-dialog-centered modal-sm">
              <div class="modal-content mb-0 p-0" style="background-color: rgba(255, 255, 255, 0.6);">
                <!-- Modal body -->
                <div class="modal-body">
                  <div class="container-fluid">
                    <button type="button" class="btn btn-warning close-modal" @click="closeModal()">&times;</button>
                    <img class="img-fluid" id="img01_map" style="height:100%; width:100%;">
                  </div>
                </div>
                <!-- Modal Footer -->
                <div class="modal-footer">
                  <h5 id="modal-title_map" style="color:blue"></h5>
                </div>
              </div>
            </div>
        </div>
        <!--<h1>VerPijp Project</h1>-->
        <div class="btn btn-dark" style="position:absolute; z-index:100; left:10px; top:40px;">OudPijp</div>
        <a href="./#/about" class="btn btn-primary" style="position:absolute; z-index:100; left:100px; top:40px;">About</a>
        <div id="map" class="h-250"></div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {loadedGoogleMapsAPI} from '../main'
    import {style_map} from '../assets/stylingdata'
    import {verdata} from '../assets/verpijptest.js'
 
  export default {
    
    data(){
        return{
        }
    
    },
    
    computed:{
        _locationsCOMP(){
            return verdata.output;    
        },
    
    },
    
    props: {
      'centerlat': {
        type: Number,
        default() {
          return window.EventBus.depijpcenter.lat
        }
      },
      'centerlng': {
        type: Number,
        default() {
          return window.EventBus.depijpcenter.lng
        }
      },
      'zoom': {
        type: Number,
        default() {
          //return 15
          return 17
        }
      },
      'mapstyle': null
    },

    created(){

    },

    mounted() {
      window.EventBus.$on('tracking', (d)=>{
        if (d.tr === true) {
            this.startTrackPosition()
        }else{
            this.stopTrackPosition()
        }
      })
      
      //console.log(this._locationsMOUNT)
      this._ecmapmymarkerMOUNT = {};
      let mymarker = {lat:0,lng:0,street:''};
      //this.initMap();
      loadedGoogleMapsAPI
                    .then(()=>{
                        this._ecmaplocationsMOUNT = verdata.output;
                        this.initMap();
                        this._ecmapmymarkerMOUNT = this.makeMarker(mymarker, true);
                        for(let i = 0; i < this._ecmaplocationsMOUNT.length; i++){
                            let z = this.makeMarker(this._ecmaplocationsMOUNT[i]);
                        };
                        //console.log('mm', this.$mymarker);
                    })
                    .catch((err)=>{console.log("RESULT loading GM API", err)});
    },
    data(){
        return {
            posWatchID:null,
        };
    },
    methods: {
      initMap() {
        //console.log(google.maps); //You can now access google maps object here; it is global to this component
        this.$map = new window.google.maps.Map(document.getElementById('map'), {
        center: new window.google.maps.LatLng(this.centerlat, this.centerlng),
        zoom: this.zoom,
        styles: style_map.data,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
      });
    
      },
      makeInfoWindow(d){

        window.openModal_map = function(picture){
              let modal = document.getElementById('myModal_map');
              //let img = document.getElementById(this.idConcat(loc.itemid+'_img'));
              //let captionText = document.getElementById("modal-title_map");
              //console.log(img.src);
              let modalImg = document.getElementById("img01_map");
              modal.style.display = "block";
              modalImg.src = picture;
              //captionText.innerHTML = loc.street+", "+loc.year;
              modal.classList.add('show');
        };
        
                    
        //I substituted the following for future changes            
        //<tr><td><a href="/#/testcamera?q=${d.picture}"><strong>foto overlap (experimental)</strong></a></td></tr>

        var contentString = `
            <div id="content">
                <div id="siteNotice"></div>
                <table>
                    <tr><td><button onclick="openModal_map('${d.picture}')"><strong>foto</strong></button></td></tr>
                    <tr><td><a href="/#/hunt/${d.imgid}/${d.itemid}/description"><strong>foto overlap (experimental)</strong></a></td></tr>
                    <tr><td><strong>year</strong></td><td>${d.year}</td></tr>
                    <tr><td><strong>est.address</strong></td><td>${d.street}</td></tr>
                    <tr><td><strong>bron</strong></td><td><a href="https://www.facebook.com/PrentenVanWeleerAmsterdamDePijp/">Postcards from de Pijp</a></td></tr>
                </table>
            <\div>
            `
        
        
        return new window.google.maps.InfoWindow({
          content: contentString
        });
      
      },
        openModal(picture){
              let modal = document.getElementById('myModal_map');
              //let img = document.getElementById(this.idConcat(loc.itemid+'_img'));
              //let captionText = document.getElementById("modal-title_map");
              //console.log(img.src);
              let modalImg = document.getElementById("img01_map");
              modal.style.display = "block";
              modalImg.src = picture;
              //captionText.innerHTML = loc.street+", "+loc.year;
              modal.classList.add('show');
        },
      closeModal(){
        //let span = document.getElementsByClassName("close-modal")[0];
        let modal = document.getElementById('myModal_map');
        modal.classList.remove('show');
        modal.style.display = "none";
      },
      iconType(t) {
            if (t == "show") {
                //code
                return "http://icons.iconarchive.com/icons/designbolts/free-multimedia/32/Dslr-Camera-icon.png"
                //return "http://icons.iconarchive.com/icons/iconcubic/classic-cameras/32/Leica-2-icon.png"
            }else if (t == "hist") {
                //code
                //return "http://icons.iconarchive.com/icons/icons8/ios7/32/Cinema-History-icon.png"
                return "https://img.icons8.com/plasticine/32/000000/order-history.png"
            }else if (t == "game") {
                //code
                //return "http://icons.iconarchive.com/icons/thegirltyler/brand-camp/32/Search-icon.png"
                //return "https://image.flaticon.com/icons/png/32/179/179658.png"
                return "http://icons.iconarchive.com/icons/graphicloads/seo-services/32/location-icon.png" 
            }else if (t == "expand") {
                //code
                //return "http://icons.iconarchive.com/icons/aha-soft/free-3d-glossy-interface/32/move-icon.png"
                //return "http://icons.iconarchive.com/icons/thegirltyler/brand-camp/32/Search-icon.png"
                return "http://icons.iconarchive.com/icons/double-j-design/super-mono-3d/32/compass-icon.png"
            }
        },
      makeMarker(d, mymark=false) {
        let zelf = this;
        let m = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(d.lat, d.lng),
          //icon: require('../assets/googlecamerablue.png'),//
          //icon: !mymark?"http://icons.iconarchive.com/icons/designbolts/free-multimedia/32/Dslr-Camera-icon.png":{path: google.maps.SymbolPath.CIRCLE, scale: 7, fillColor: '#00CCFF', fillOpacity: 0.8, strokeWeight: 1},
          icon: !mymark?this.iconType(d.useas):{path: google.maps.SymbolPath.CIRCLE, scale: 7, fillColor: '#00CCFF', fillOpacity: 0.8, strokeWeight: 1},
          map: zelf.$map,
          //title: !mymark?d.street:'ME',
        })
        let iw = zelf.makeInfoWindow(d);
        m.addListener('click', function() {
          iw.open(zelf.$map, this);
        });
      //{path: google.maps.SymbolPath.CIRCLE, scale: 10}
        return m
      },
      startTrackPosition() {
        if (navigator.geolocation) {
          this.posWatchID = navigator.geolocation.watchPosition(
                       this.successPosition,
                       this.failurePosition, 
                      {
                       enableHighAccuracy: true,
                       timeout:15000,
                       maximumAge: 1000
          });
        }else{
          document.getElementById("resulttest").innerHTML = "Your browser does not support Geolocation API!!!";
        }
      },
      stopTrackPosition(){
            if (!this.posWatchID) {
                return
            }
            navigator.geolocation.clearWatch(this.posWatchID)
            this._ecmapmymarkerMOUNT.setPosition({lat:0,lng:0})            
        },
      successPosition: function(position){
            this._ecmapmymarkerMOUNT.setPosition({lat:position.coords.latitude,lng:position.coords.longitude})
      },
      failurePosition: function(err){
        alert("Error Code: " + err.code + " Error Message: " + err.message);
      },
    }
  }
</script>

<style scoped>
    #map {
        margin: 0 auto;
        background: gray;
    }
    .h-250 {
        /*height:700px;*/
        height:100vh;
    }
    
    @media screen and (max-width: 450px) {
      h1 {
        /*display: none;*/
        margin: 0 100px;
      }
      #map {
        margin: 0px;
        height: 100vh;
        width: 100vw;
        }
    }
    
    @media screen and (max-width: 800px) {
      h1 {
        /*display: none;*/
        margin: 0 50px;
      }
      #map {
        margin: 0px;
        height: 100vh;
        width: 100vw;
        }
    }
    
</style>