<template>
     <!-- COMPONENT wrap-data-area START --> 
     <div id="wrap-data-area"> 
            <!-- COMPONENT gallery START -->
            <div id="sel-gallery" class="content-fluid" v-if="!showAboutSect">
                  <div class="grid">
                      <div class="cell" v-for="loc in filteredLocations">
                          <div class="item-title">
                              <img style="width:100px;height:100px;margin-left:20px;" @click="openModal(loc)" :id="idConcat(loc.itemid+'_img')" :src=loc.picture class="responsive-image">
                              </br>
                              <button @click="cltMarker($event)" type="button" :id="idConcat(loc.itemid)" :value="loc.itemid" class="btn btn-street" :class="loc.sel? 'btn-outline-secondary':'btn-outline-info'">{{loc.street}}, {{loc.year}}</button>
                          </div>
                      </div>
                  </div>
              </div><!-- COMPONENT gallery END -->
      </div> <!-- COMPONENT wrap-data-area END -->
</template>
<script>
    import Vue from 'vue';

    
    export default {
      
      data(){
          return {

                };
        },
       
      
       computed:{
       //     filteredLocations: function(){
       //           return filteredLocations
       //     },      
       //
       test: function(){console.log(333, this.filteredLocations)}
       },
        
        props:['locations', 'filteredLocations'],
        
        methods:{
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
            idConcat(idx){
                return "btnaddmark_"+idx
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
        }
    }
</script>